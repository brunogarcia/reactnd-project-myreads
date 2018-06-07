import React from 'react';
import PropTypes from 'prop-types';
import randomID from 'random-id';
import isEmpty from 'lodash.isempty';
import Bookshelf from '../../components/Bookshelf';
import Types from '../../utils/types';

const Bookshelfs = (props) => {
  const { shelfs, books, onChangeShelf } = props;
  const items = Object.entries(shelfs);

  return (
    <div className="list-books-content">
      {items.map((item) => {
        const [key] = item;
        const booksForThisShelf = books.filter(book => book.shelf === key);

        if (isEmpty(booksForThisShelf)) {
          return null;
        }

        return (
          <Bookshelf
            shelf={item}
            key={randomID()}
            books={booksForThisShelf}
            onChangeShelf={onChangeShelf}
          />
        );
      })}
    </div>
  );
};

Bookshelfs.propTypes = {
  shelfs: Types.shelfs.isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Bookshelfs;
