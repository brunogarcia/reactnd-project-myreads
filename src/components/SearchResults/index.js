import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';
import Types from '../../utils/types';
import constants from '../../utils/constants';

const DEFAULT_SHELF = 'none';

const getDefaultShelf = () => {
  const { SHELFS } = constants;
  return SHELFS
    .filter(shelf => shelf.NAME === DEFAULT_SHELF)
    .reduce((acc, item) => (item));
};

const SearchResults = (props) => {
  const { books, onChangeShelf } = props;

  console.log(books);

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map(book => (
          <Book
            key={book.id}
            shelf={getDefaultShelf()}
            book={book}
            onChangeShelf={onChangeShelf}
          />
        ))}
      </ol>
    </div>
  );
};

SearchResults.propTypes = {
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default SearchResults;
