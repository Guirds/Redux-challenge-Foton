const INITIAL_STATE = [
  {
    id: 1,
    img: 'book',
    nome: 'nome do livro',
    preco: 'preço',
    descricao: 'meu livro é bom',
  },
  {
    id: 2,
    img: 'books',
    nome: 'nome do livro',
    preco: 'preço',
    descricao: 'meu livro é bom',
  },
];

export default function detailsBook(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
