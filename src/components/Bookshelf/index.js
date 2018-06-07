import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from '../BooksGrid';
import Types from '../../utils/types';

const Bookshelf = (props) => {
  const { shelf, books, onChangeShelf } = props;
  const [key, title] = shelf;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {title}
      </h2>
      <div className="bookshelf-books">
        <BooksGrid
          shelf={key}
          books={books}
          onChangeShelf={onChangeShelf}
        />
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  shelf: PropTypes.arrayOf(PropTypes.string).isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};


export default Bookshelf;
