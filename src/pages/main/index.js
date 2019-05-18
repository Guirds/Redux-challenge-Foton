// Lista dos livros disponiveis
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BooksActions from '../../store/actions/list';

const Main = () => (
  <>
    <a href=" ">Menu</a>
    <input type="text" placeholder="Search for book" />

    <ul>
      {props.books.map(book => (
        <li key={book.id}>
          <a href=" ">{book.img}</a>
        </li>
      ))}
    </ul>
  </>
);

Main.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
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
