import React from 'react';
import PropTypes from 'prop-types';
import randomID from 'random-id';
import isEmpty from 'lodash.isempty';
import Bookshelf from '../../components/Bookshelf';
import Types from '../../utils/types';

const Bookshelves = (props) => {
  const { shelves, books, onChangeShelf } = props;
  const items = Object.entries(shelves);

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

Bookshelves.propTypes = {
  shelves: Types.shelves.isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default Bookshelves;
