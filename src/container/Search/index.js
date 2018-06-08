import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import * as BooksAPI from '../../BooksAPI';
import Error from '../../components/Error';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import constants from '../../utils/constants';

const { MIN_LENGTH, MESSAGES } = constants.SEARCH;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      error: false,
      books: [],
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeShelf = this.handleChangeShelf.bind(this);
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  handleChangeShelf(book, shelf) {
    BooksAPI.update(book, shelf)
      .then((response) => {
        if (!isEmpty(response) && this.isAlreadyMounted) {
          console.log(response);
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
        books: [],
        message: '',
      });
    } else {
      this.searchBooks(query);
    }
  }

  checkAPIResponse(response) {
    const { error } = response;

    if (error) {
      this.setState({
        books: [],
        message: MESSAGES.noResults,
      });
    } else {
      this.setState({
        books: response,
        message: '',
      });
    }
  }

  searchBooks(query) {
    this.setState({
      message: MESSAGES.searching,
    });

    BooksAPI.search(query)
      .then((response) => {
        if (this.isAlreadyMounted) {
          console.log(response);
          this.checkAPIResponse(response);
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
      message,
      books,
    } = this.state;

    if (error) {
      return <Error />;
    }

    return (
      <div className="search-books">
        <SearchBar
          onChangeSearch={this.handleChangeSearch}
        />
        <SearchResults
          books={books}
          message={message}
          onChangeShelf={this.handleChangeShelf}
        />
      </div>
    );
  }
}

export default Search;
