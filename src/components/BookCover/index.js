import React from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash.isundefined';
import constants from '../../utils/constants';

const { IMAGE } = constants;

const getStyles = (image) => {
  const thumbnail = isUndefined(image) ? IMAGE.DEFAULT : image.smallThumbnail;

  return {
    width: 128,
    height: 193,
    backgroundImage: `url("${thumbnail}")`,
  };
};

const BookCover = ({ image }) => <div className="book-cover" style={getStyles(image)} />;

BookCover.propTypes = {
  image: PropTypes.shape({
    smallThumbnail: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
};

BookCover.defaultProps = {
  image: undefined,
};

export default BookCover;
