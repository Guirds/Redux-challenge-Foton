import { all, takeLatest } from 'redux-saga/effects';

import { filterBook } from './filterBook';

export default function* rootSaga() {
  yield all([takeLatest('FILTER_BOOKS_REQUEST', filterBook)]);
}
