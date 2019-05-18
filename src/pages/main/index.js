// Lista dos livros disponiveis
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BooksActions from '../../store/actions/list';

const Main = props => (
  <>
    <a href=" ">Menu</a>
    <input type="text" placeholder="Search for book" />

    <ul>
      {props.books.map(book => (
        <li key={book.id}>
          <a href=" ">{book.imageLinks.thumbnail}</a>
          <li>{book.title}</li>
          <li>{book.pageCount}</li>
          <li>
            {' '}
            <small>by</small>
            {book.authors}
          </li>
          <li>{book.saleInfo.saleability}</li>
          <li>{book.description}</li>
        </li>
      ))}
    </ul>
  </>
);

Main.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
      title: PropTypes.string,
      pageCount: PropTypes.number,
      authors: PropTypes.string,
      description: PropTypes.string,
      saleInfo: PropTypes.shape({
        saleability: PropTypes.string,
      }),
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
