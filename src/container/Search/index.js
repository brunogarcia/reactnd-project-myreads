import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import * as BooksAPI from '../../BooksAPI';
import Error from '../../components/Error';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import Loading from '../../components/Loading';
import constants from '../../utils/constants';

const { MIN_LENGTH, MESSAGES } = constants.SEARCH;

/**
 * Create a map of my bookshelves
 * @param books: collection of book objects
 * @returns collection of user's books objects with this structure {id: '12345', shelf: 'read'}
 */
const createMapOfMyBookshelves = books => (
  books.reduce((acc, { id, shelf }) => (acc.concat({ id, shelf })), [])
);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      loading: true,
      error: false,
      results: [],
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeShelf = this.handleChangeShelf.bind(this);
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
    this.getAllBooks();
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getAllBooks() {
    BooksAPI.getAll()
      .then((response) => {
        if (this.isAlreadyMounted) {
          this.myBookshelves = createMapOfMyBookshelves(response);
          this.setState({
            loading: false,
          });
        }
      }).catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  getIndexOnMyBookshelves(id) {
    return this.myBookshelves.findIndex(book => book.id === id);
  }

  getBookShelf(bookId) {
    const index = this.getIndexOnMyBookshelves(bookId);
    const noResults = (index === -1);

    return noResults ?
      constants.SHELVES.none.toLowerCase() :
      this.myBookshelves[index].shelf;
  }

  handleChangeShelf(book, shelf) {
    BooksAPI.update(book, shelf)
      .then((response) => {
        if (!isEmpty(response) && this.isAlreadyMounted) {
          this.setState({
            message: MESSAGES.shelfChanged,
          });
        }
      }).catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  handleChangeSearch(query) {
    if (query.length < MIN_LENGTH) {
      this.setState({
        results: [],
        message: '',
      });
    } else {
      this.searchBooks(query);
    }
  }

  checkSearchResponse(response) {
    const { error } = response;

    if (error) {
      this.setState({
        results: [],
        message: MESSAGES.noResults,
      });
    } else {
      this.setState({
        message: '',
        results: this.addShelvesToBooks(response),
      });
    }
  }

  /**
   * Add a proper shelf to each book
   * @param response: collection of book objects
   * @return collection of book with a proper shelf assigned
   */
  addShelvesToBooks(books) {
    return books.map((book) => {
      const clonedBook = { ...book };
      clonedBook.shelf = this.getBookShelf(book.id);
      return clonedBook;
    });
  }

  searchBooks(query) {
    this.setState({
      message: MESSAGES.searching,
    });

    BooksAPI.search(query)
      .then((response) => {
        if (this.isAlreadyMounted) {
          this.checkSearchResponse(response);
        }
      }).catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  render() {
    const {
      error,
      loading,
      message,
      results,
    } = this.state;

    if (error) {
      return <Error />;
    }

    return (
      <div className="search-books">
        <Loading isLoading={loading} />
        <SearchBar
          onChangeSearch={this.handleChangeSearch}
        />
        <SearchResults
          results={results}
          message={message}
          onChangeShelf={this.handleChangeShelf}
        />
      </div>
    );
  }
}

export default Search;
