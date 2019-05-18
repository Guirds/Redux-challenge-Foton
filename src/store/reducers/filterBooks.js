const INITIAL_STATE = [
  {
    id: 1,
    img: 'book',
  },
  {
    id: 2,
    img: 'books',
  },
];

export default function filterBooks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FILTER_BOOKS_SUCESS':
      return [...state, action.payload.data];
    default:
      return state;
  }
}
