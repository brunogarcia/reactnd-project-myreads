import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

const BookAuthors = ({ authors }) => (
  !isEmpty(authors) &&
  <div className="book-authors">
    {authors.join(', ')}
  </div>
);

BookAuthors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string),
};

export default BookAuthors;
