export const filterBooksRequest = book => ({
  type: 'FILTER_BOOKS_REQUEST',
  payload: { book },
});

export const filterBooksSucess = data => ({
  type: 'FILTER_BOOKS_SUCESS',
  payload: { data },
});
