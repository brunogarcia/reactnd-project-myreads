import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import BooksGrid from '../BooksGrid';
import Toastr from '../Toastr';
import Types from '../../utils/types';

const SearchResults = (props) => {
  const {
    results,
    message,
    onChangeShelf,
  } = props;

  return (
    <div className="search-books-results">
      <Toastr message={message} />
      {
        !isEmpty(results) &&
        <BooksGrid
          books={results}
          onChangeShelf={onChangeShelf}
        />
      }
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.arrayOf(Types.book).isRequired,
  message: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};


export default SearchResults;
