import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from '../BooksGrid';
import Types from '../../utils/types';

const Bookshelf = ({ title, books, onChangeShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {title}
    </h2>
    <div className="bookshelf-books">
      <BooksGrid
        books={books}
        onChangeShelf={onChangeShelf}
      />
    </div>
  </div>
);

Bookshelf.propTypes = {
  title: Types.shelfTitle.isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};


export default Bookshelf;
