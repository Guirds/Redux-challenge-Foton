import { combineReducers } from 'redux';

import detailsBook from './detailsBook';
import filterBooks from './filterBooks';
import books from './books';

export default combineReducers({
  books,
  detailsBook,
  filterBooks,
});
