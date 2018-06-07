import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import Book from '../Book';
import NoResults from '../../components/NoResults';
import Searching from '../../components/Searching';
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
  const {
    books,
    searching,
    noResults,
    onChangeShelf,
  } = props;

  console.log(books);

  return (
    <div className="search-books-results">
      { noResults && <NoResults /> }
      { searching && <Searching /> }
      { !isEmpty(books) &&
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
      }
    </div>
  );
};

SearchResults.propTypes = {
  noResults: PropTypes.bool.isRequired,
  searching: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default SearchResults;
