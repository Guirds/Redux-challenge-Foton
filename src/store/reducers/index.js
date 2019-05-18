import { combineReducers } from 'redux';

import books from './filterBook';
import details from './bookDetail';

export default combineReducers({
  books,
  details,
});
