import { oneOf, shape, arrayOf, string } from 'prop-types';
import constants from './constants';

const { SHELFS } = constants;
const shelf = oneOf(Object.keys(SHELFS));

const book = shape({
  title: string.isRequired,
  authors: arrayOf(string),
  imageLinks: shape({
    smallThumbnail: string.isRequired,
    thumbnail: string.isRequired,
  }).isRequired,
});

const shelfs = shape({
  none: string.isRequired,
  read: string.isRequired,
  wantToRead: string.isRequired,
  currentlyReading: string.isRequired,
});

export default { book, shelf, shelfs };
