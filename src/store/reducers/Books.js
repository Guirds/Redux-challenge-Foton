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

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FILTER_BOOKS':
      return [...state, {}];
    default:
      return state;
  }
}
