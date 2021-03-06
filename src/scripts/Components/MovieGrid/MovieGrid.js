import gridTemplate from './MovieGrid.html';
import cardTemplate from './MovieCard.html';
import './MovieGrid.scss';

/**
 * default values for the movie grid model
 */
const defaultModel = {
  items: [],
  sortBy: 'title',
  order: 'asc',
};

/**
 * MovieGrid Component
 * it provides all methods to display the movie grid
 */
export class MovieGrid {

  constructor(props = defaultModel) {
    const { items, sortBy, order } = props;
    this.items = items; // array of movies
    this.sortBy = sortBy; // field to order the grid
    this.order = order; // order direction, the possible values are 'asc' or 'desc'
  }

  /**
   * it resets the array of movies
   * and re-renders the movie grid to the empty template
   */
  clearList() {
    this.items.length = 0;
    const movieGridDOM = document.getElementById('wrapper_MovieGrid');
    movieGridDOM.innerHTML = gridTemplate;
  }

  /**
   * it updates the movie list
   * and re-orders them with the current order value
   * @param {array} list 
   */
  updateList(list) {
    this.items = list;
    this.orderList(this.order);
  }

  /**
   * it updates the field to be order by
   * NOT IN USE right now, to be consider for a future feature
   * @param {string} field
   */
  setSortBy(field) {
    this.sortBy = field;
  }

  /**
   * it toggles the order of the movie list
   * and re-renders the movie grid display
   */
  toggleOrder() {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
    this.orderList();
    this.paintList();
  }

  /**
   * it re-orders the movie list array
   * TOBEIMPROVED: manage possible errors for unspected params
   * @param {string} direction
   * @param {string} by
   */
  orderList(direction = this.order, by = this.sortBy) {
    this.items.sort(function(a, b) {
      if (a[by] > b[by]) {
        return direction === 'asc' ? 1 : -1;
      }
      if (a[by] < b[by]) {
        return direction === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  /**
   * it updates the DOM with all the movie cards of the curren movie list array
   */
  paintList() {
    const movieGridDOM = document.getElementById('wrapper_MovieGrid');
    movieGridDOM.innerHTML = gridTemplate;
    this.items.forEach(movieCard => {

      // TOIMPROVE: check that the card is not duplicated
      // looks like omdbapi.com response some times sends duplicated movies
      if (document.getElementById(movieCard.id)) {
        return;
      }

      // build the card wrapper
      const newcCard = document.createElement('article');
      newcCard.setAttribute('id', movieCard.id);
      newcCard.setAttribute('class', 'MovieCard');
      newcCard.setAttribute('role', 'button');
      newcCard.setAttribute('tabindex', '1');

      // add link to the card wrapper
      const imdbURL = `https://www.imdb.com/title/${movieCard.id}`;
      newcCard.onclick = function(event) {
        event.preventDefault();
        window.open(imdbURL);
      }

      // populate the card content
      newcCard.innerHTML = cardTemplate;
      newcCard.querySelector('.MovieCard-image').setAttribute('src', movieCard.poster);
      newcCard.querySelector('.MovieCard-image').setAttribute('alt', movieCard.title);
      newcCard.querySelector('.MovieCard-title').innerHTML = movieCard.title;
      newcCard.querySelector('.MovieCard-year').innerHTML = `[${movieCard.year}]`;
      newcCard.querySelector('.MovieCard-plot').innerHTML = movieCard.plot;
      newcCard.querySelector('.MovieCard-rating').innerHTML = movieCard.rating;
      movieGridDOM.querySelector('#MovieGrid').appendChild(newcCard);
    });
  }

  /**
   * it updates and re-renders the movie list
   * @param {array} movieList
   */
  updateGrid(movieList) {
    this.updateList(movieList);
    this.paintList();
  }

  /**
   * it updates the movie list to empty
   * and paints a 'no movie message'
   */
  paintNoMovies() {
    this.clearList();
    const movieGridDOM = document.getElementById('wrapper_MovieGrid');
    movieGridDOM.innerHTML = gridTemplate;
    const noMovieMessage = document.createElement('p');
    noMovieMessage.setAttribute('class', 'MovieGrid-noMovies');
    noMovieMessage.setAttribute('role', 'alert');
    noMovieMessage.innerHTML = `Ooopppss! Looks like we have not seen that one.<br/>You can try searching for 'Avengers'<br /><span>;)</span>`;
    movieGridDOM.querySelector('#MovieGrid').appendChild(noMovieMessage);
  }
}
