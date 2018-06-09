import constants from './constants';

let myBookshelves;

/**
 * Create a map of my bookshelves
 * @param books: collection of book objects
 * @returns collection of user's books with this structure {id: '12345', shelf: 'read'}
 */
const createMapOfMyBookshelves = (books) => {
  myBookshelves = books.reduce((acc, { id, shelf }) => (acc.concat({ id, shelf })), []);
};

/**
 * Find the index of a book in the bookshelves
 * @param id: a book id
 * @returns a number with the index of the book or -1 if not found a match
 */
const getIndexOnMyBookshelves = id => myBookshelves.findIndex(book => book.id === id);

/**
 * Get the shelf of a book
 * @param id: a book id
 * @returns a string with the shelf
 *          must be one of these: 'currentlyReading', 'wantToRead', 'read'
 *          or 'none' if not found a match
 */
const getBookShelf = (id) => {
  const index = getIndexOnMyBookshelves(id);
  const noResults = (index === -1);

  return noResults ?
    constants.SHELVES.none.toLowerCase() :
    myBookshelves[index].shelf;
};

/**
 * Add a proper shelf to each book
 * @param response: collection of book objects
 * @return collection of book with a proper shelf assigned
 */
const addShelvesToBooks = books => (
  books.map((book) => {
    const clonedBook = { ...book };
    clonedBook.shelf = getBookShelf(book.id);
    return clonedBook;
  })
);

export default { createMapOfMyBookshelves, addShelvesToBooks };
