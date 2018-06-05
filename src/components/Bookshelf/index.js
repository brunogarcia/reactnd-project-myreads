import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';
import Types from '../../utils/types';

const Bookshelf = (props) => {
  const { title, books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => <Book key={book.id} book={book} />)}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
};


export default Bookshelf;