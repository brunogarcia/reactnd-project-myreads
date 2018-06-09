import React from 'react';
import PropTypes from 'prop-types';

const BookAuthors = ({ authors }) => (
  <div className="book-authors">
    {authors.join(', ')}
  </div>
);

BookAuthors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookAuthors;
