import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { filterBooksSucess } from '../actions/filterBook';

export function* filterBook(action) {
  const { data } = yield call(api.get, `/volumes?q=${action.payload.data}+terms`);

  const filterBookData = {
    id: data.id,
    imageLinks: data.imageLinks,
    title: data.title,
    pageCount: data.pageCount,
    authors: data.authors,
    description: data.description,
    saleability: data.saleInfo.saleability,
  };

  yield put(filterBooksSucess(filterBookData));
}
