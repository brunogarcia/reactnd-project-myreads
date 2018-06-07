import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import BooksGrid from '../BooksGrid';
import NoResults from '../NoResults';
import Searching from '../Searching';
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
    onChangeShelf,
    searching,
    noResults,
  } = props;

  console.log(books);

  return (
    <div className="search-books-results">
      { noResults && <NoResults /> }
      { searching && <Searching /> }
      { 
        !isEmpty(books) &&
        <BooksGrid
          books={books}
          shelf={getDefaultShelf()}
          onChangeShelf={onChangeShelf}
        />
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
