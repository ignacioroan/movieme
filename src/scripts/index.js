import { Searcher } from './Components/Searcher/Searcher';
import { MovieGrid } from './Components/MovieGrid/MovieGrid';
import '../stylesheets/style.scss';

/**
 * constructs the components and init app
 * MovieGrid is used to display the movies
 * Searcher is used to fetch and manage the data
 */
function initComponents() {

  const movieGrid = new MovieGrid();
  const searcher = new Searcher();
  searcher.init(movieGrid);

}

initComponents();
