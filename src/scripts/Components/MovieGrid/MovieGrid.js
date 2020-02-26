import gridTemplate from './MovieGrid.html';
import cardTemplate from './MovieCard.html';
import './MovieGrid.scss';

const defaultModel = {
  items: [],
  sortBy: 'title',
  order: 'asc',
};

export class MovieGrid {
  constructor(props = defaultModel) {
    const { items, sortBy, order } = props;
    this.items = items;
    this.sortBy = sortBy;
    this.order = order;
  }

  clearList() {
    this.items.length = 0;
    const movieGridDOM = document.getElementById('wrapper_MovieGrid');
    movieGridDOM.innerHTML = gridTemplate;
  }

  updateList(item) {
    this.items = item;
    this.orderList(this.order);
  }

  setSortBy(field) {
    this.sortBy = field;
  }

  toggleOrder() {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
    this.orderList();
    this.paintList();
  }

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

  paintList() {
    const movieGridDOM = document.getElementById('wrapper_MovieGrid');
    movieGridDOM.innerHTML = gridTemplate;
    this.items.forEach(movieCard => {
      const newcCard = document.createElement('div');
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

  updateGrid(list) {
    this.updateList(list);
    this.paintList();
  }
}
