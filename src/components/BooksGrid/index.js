import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';
import Types from '../../utils/types';

const BookGrid = (props) => {
  const { books, onChangeShelf } = props;
  return (
    <ol className="books-grid">
      {books.map(book => (
        <Book
          book={book}
          key={book.id}
          onChangeShelf={onChangeShelf}
        />
      ))}
    </ol>
  );
};

BookGrid.propTypes = {
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};


export default BookGrid;
