import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import BookCover from '../BookCover';
import ShelfChanger from '../ShelfChanger';
import Types from '../../utils/types';

const getAuthors = authors => authors.join(', ');

const Book = (props) => {
  const { book, onChangeShelf } = props;
  const { title, authors, imageLinks } = book;

  const handleChangeShelf = (newShelf) => {
    onChangeShelf(book, newShelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <BookCover image={imageLinks.smallThumbnail} />
          <ShelfChanger
            shelf={book.shelf}
            onChange={handleChangeShelf}
          />
        </div>
        <div className="book-title">{title}</div>
        {
          !isEmpty(authors) &&
          <div className="book-authors">{getAuthors(authors)}</div>
        }
      </div>
    </li>
  );
};

Book.propTypes = {
  book: Types.book.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Book;
