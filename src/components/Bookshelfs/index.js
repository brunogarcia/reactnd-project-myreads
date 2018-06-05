import React from 'react';
import PropTypes from 'prop-types';
import randomID from 'random-id';
import Bookshelf from '../../components/Bookshelf';
import constants from '../../utils/constants';

const { SHELFS } = constants;

const Bookshelfs = (props) => {
  const { books } = props;

  return(
    <div className="list-books-content">
      {SHELFS.map(({ NAME, TITLE }) => {
        const booksForThisShelf = books.filter(book => book.shelf === NAME);
        return <Bookshelf key={randomID()} title={TITLE} books={booksForThisShelf} />;
      })}
    </div>
  );
};

Bookshelfs.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Bookshelfs;
