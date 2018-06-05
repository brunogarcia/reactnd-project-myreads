import React from 'react';
import PropTypes from 'prop-types';
import randomID from 'random-id';
import Bookshelf from '../../components/Bookshelf';
import Types from '../../utils/types';

const Bookshelfs = (props) => {
  const { shelfs, books } = props;

  return (
    <div className="list-books-content">
      {shelfs.map((shelf) => {
        const booksForThisShelf = books.filter(book => book.shelf === shelf.NAME);
        return <Bookshelf key={randomID()} title={shelf.TITLE} books={booksForThisShelf} />;
      })}
    </div>
  );
};

Bookshelfs.propTypes = {
  shelfs: PropTypes.arrayOf(Types.shelf).isRequired,
  books: PropTypes.arrayOf(Types.book).isRequired,
};

export default Bookshelfs;
