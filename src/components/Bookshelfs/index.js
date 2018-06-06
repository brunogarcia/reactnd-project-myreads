import React from 'react';
import PropTypes from 'prop-types';
import randomID from 'random-id';
import isEmpty from 'lodash.isempty';
import Bookshelf from '../../components/Bookshelf';
import Types from '../../utils/types';

const Bookshelfs = (props) => {
  const { shelfs, books, onChangeShelf } = props;

  return (
    <div className="list-books-content">
      {shelfs.map((shelf) => {
        const booksForThisShelf = books.filter(book => book.shelf === shelf.NAME);

        if (isEmpty(booksForThisShelf)) {
          return null;
        }

        return (
          <Bookshelf
            key={randomID()}
            shelf={shelf}
            books={booksForThisShelf}
            onChangeShelf={onChangeShelf}
          />
        );
      })}
    </div>
  );
};

Bookshelfs.propTypes = {
  shelfs: PropTypes.arrayOf(Types.shelf).isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Bookshelfs;
