import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from '../BooksGrid';
import Types from '../../utils/types';

const Bookshelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {props.shelf.TITLE}
    </h2>
    <div className="bookshelf-books">
      <BooksGrid {...props} />
    </div>
  </div>
);

Bookshelf.propTypes = {
  shelf: Types.shelf.isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};


export default Bookshelf;
