import React from 'react';
import PropTypes from 'prop-types';
import Changer from '../Changer';
import Types from '../../utils/types';

const getImage = image => ({
  width: 128,
  height: 193,
  backgroundImage: `url("${image}")`,
});

const getAuthors = authors => authors.join(', ');

const Book = (props) => {
  const { shelf, book, onChangeShelf } = props;
  const { title, authors, imageLinks } = book;

  const handleChangeShelf = (newShelf) => {
    onChangeShelf(book, newShelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={getImage(imageLinks.smallThumbnail)}
          />
          <Changer shelf={shelf} onChange={handleChangeShelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{getAuthors(authors)}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  shelf: Types.shelf.isRequired,
  book: Types.book.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Book;
