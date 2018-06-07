import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import BooksGrid from '../BooksGrid';
import Toastr from '../Toastr';
import Types from '../../utils/types';
import constants from '../../utils/constants';

const { none } = constants.SHELVES;

const SearchResults = (props) => {
  const {
    books,
    message,
    onChangeShelf,
  } = props;

  return (
    <div className="search-books-results">
      <Toastr message={message} />
      {
        !isEmpty(books) &&
        <BooksGrid
          books={books}
          shelf={none.toLowerCase()}
          onChangeShelf={onChangeShelf}
        />
      }
    </div>
  );
};

SearchResults.propTypes = {
  books: PropTypes.arrayOf(Types.book).isRequired,
  message: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};


export default SearchResults;
