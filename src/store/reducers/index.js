import { combineReducers } from 'redux';

import books from './filterBook';
import details from './BookDetail';

export default combineReducers({
  books,
  details,
});
