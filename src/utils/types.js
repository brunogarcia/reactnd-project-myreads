import { shape, arrayOf, string } from 'prop-types';

const book = shape({
  title: string.isRequired,
  authors: arrayOf(string).isRequired,
  imageLinks: shape({
    smallThumbnail: string.isRequired,
    thumbnail: string.isRequired,
  }).isRequired,
});

export default { book };
