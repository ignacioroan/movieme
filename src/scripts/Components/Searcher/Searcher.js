import template from './Searcher.html';
import './Searcher.scss';

/**
 * basic configuration values
 */
const config = {
  URL: 'http://www.omdbapi.com',
  API_KEY: '422350ff',
  TYPE: 'movie',
  BODY: document.getElementsByTagName('body')[0],
};

/**
 * treat the plot to be sure it's not too long
 * @param {string} plot
 * @returns {string}
 */
const _constraintPlot = function(plot) {

  const maxCharacter = 175;

  if (plot.length > maxCharacter) {

      // limit the maximum number or characters
    const wordSeparator = ' ';
    plot = plot.substr(0, maxCharacter);

    // get rid of the las word (just in case it's sliced)
    // and add '...'
    const lastIndex = plot.lastIndexOf(' ');
    plot = `${plot.substring(0, lastIndex)}...`;

  }

  return plot;
};

/**
 * treat the data to populate our own model
 * if the value es 'N/A' the function will gave a fallback value
 * @param {object} data
 * @returns {object}
 */
const _parseData = function(data) {
  return {
    title: data.Title !== 'N/A' ? data.Title : 'Title not available',
    year: data.Year !== 'N/A' ? data.Year : '????',
    plot: data.Plot !== 'N/A' ? _constraintPlot(data.Plot) : 'Plot not available',
    rating: data.imdbRating !== 'N/A' ? data.imdbRating : 'Not rated',
    id: data.imdbID,
    poster:
      data.Poster !== 'N/A'
        ? data.Poster
        : 'https://dummyimage.com/140x238/ccc/333.png&text=Image+not+available',
  };
};

/**
 * fetch data from url
 * @param {string} url
 * @returns {promise}
 */
const _getMovieData = url => fetch(url).then(response => response.json());

/**
 * manages 'is-loading' class in the body
 * it's used to toggle the loading status of the app
 */
const _toggleLoadingStatus = function() {
  config.BODY.classList.toggle('is-loading');
};

/**
 * manages the 'is-home' class in the body
 * it's used to to change the views of the app
 * @param {boolean} value
 */
const _setHome = function(value = true) {
  value ? config.BODY.classList.add('is-home') : config.BODY.classList.remove('is-home');
};

/**
 * Searcher Component
 * it fetch and manages all the data
 * and uses the provided movieGrid methods to update the movie grid
 */
export class Searcher {

  /**
   * inits the Searcher component
   * requires the movieGrid component that provides methods to manage the movie grid
   * @param {object} movieGrid
   */
  init(movieGrid) {

    const searcherDOM = document.getElementById('wrapper_MovieSearcher');
    searcherDOM.innerHTML = template;
    const inputElement = document.getElementById('MovieSearcher_formControl');

    // bind onsubmit function to search button
    document.getElementById('MovieSearcher').onsubmit = async function(event) {
      event.preventDefault();

      const searchString = inputElement.value;
      const listUrl = `${config.URL}/?apikey=${config.API_KEY}&s=${searchString}&type=${config.TYPE}`;

      // set App as loading while fetching data
      _toggleLoadingStatus();

      try {

        // wait until we have the rawData
        const rawData = await _getMovieData(listUrl);

        // proceed if we fetch the raw data AND there is at least a movie
        if (rawData.Response === 'True') {

          const promises = rawData.Search.map(function(element) {
            const movieUrl = `${config.URL}/?apikey=${config.API_KEY}&i=${element.imdbID}`;
            return _getMovieData(movieUrl).then(data => _parseData(data));
          });

          // fetch all the remaining data synchronous
          // wait until it's resolved to avoid undating the grid multiple times
          Promise.all(promises).then(results => {
            _toggleLoadingStatus(); // remove loading status
            _setHome(false); // remove home status
            movieGrid.updateGrid(results);
          });

        } else {

          _toggleLoadingStatus(); // remove loading status
          // TOIMPROVE: display a message 'that is not a movie'
          console.error(rawData.Error);

        }
      } catch (error) {
        _toggleLoadingStatus(); // remove loading status
        console.error(error);
      }

      // clear the input and focus it
      inputElement.value = '';
      inputElement.focus();
    };

    // bind onclick function to order button
    const orderButton = document.getElementById('MovieSearcher_orderButton');
    orderButton.onclick = function(event) {
      event.preventDefault();
      movieGrid.toggleOrder();
      orderButton.classList.toggle('is-flipped');
    };

    // bind onclick function to back button
    const backButton = document.getElementById('MovieSearcher_backButton');
    backButton.onclick = function(event) {
      event.preventDefault();
      inputElement.value = '';
      movieGrid.clearList();
      _setHome();
    };

  }
}
