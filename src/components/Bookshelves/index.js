import React from 'react';
import PropTypes from 'prop-types';
import randomID from 'random-id';
import isEmpty from 'lodash.isempty';
import Bookshelf from '../../components/Bookshelf';
import Types from '../../utils/types';
import constants from '../../utils/constants';

const shelves = Object.entries(constants.SHELVES);

const Bookshelves = ({ books, onChangeShelf }) => (
  <div className="list-books-content">
    {shelves.map(([shelf, title]) => {
      const booksInThisShelf = books.filter(book => book.shelf === shelf);

      if (isEmpty(booksInThisShelf)) {
        return null;
      }

      return (
        <Bookshelf
          title={title}
          key={randomID()}
          books={booksInThisShelf}
          onChangeShelf={onChangeShelf}
        />
      );
    })}
  </div>
);

Bookshelves.propTypes = {
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Bookshelves;
