import { combineReducers } from 'redux';

import books from './Books';
import details from './BookDetail';

export default combineReducers({
  books,
  details,
});
