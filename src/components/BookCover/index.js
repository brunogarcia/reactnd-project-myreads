import React from 'react';
import PropTypes from 'prop-types';

const getStyles = image => ({
  width: 128,
  height: 193,
  backgroundImage: `url("${image}")`,
});

const BookCover = ({ image }) => <div className="book-cover" style={getStyles(image)} />;

BookCover.propTypes = {
  image: PropTypes.string.isRequired,
};

export default BookCover;
