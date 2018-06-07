import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import SearchResults from '../../components/SearchResults';
import NoResults from '../../components/NoResults';
import Error from '../../components/Error';
import * as BooksAPI from '../../BooksAPI';
import SearchBar from '../../components/SearchBar';

const MIN_LENGTH_SEARCH = 5;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      emptyQuery: false,
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
    console.log(book, shelf);
  }

  handleChangeSearch(query) {
    if (query.length < MIN_LENGTH_SEARCH) {
      this.setState({
        books: [],
        searching: false,
        emptyQuery: false,
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
        searching: false,
        emptyQuery: true,
      });
    } else {
      this.setState({
        books: response,
        searching: false,
        emptyQuery: false,
      });
    }
  }

  searchBooks(query) {
    this.setState({
      searching: true,
    });

    console.log(JSON.stringify({ query }));

    BooksAPI.search(query)
      .then((response) => {
        if (this.isAlreadyMounted) {
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
      searching,
      emptyQuery,
      books,
    } = this.state;

    if (error) {
      return <Error />;
    }

    return (
      <div className="search-books">
        <SearchBar onChangeSearch={this.handleChangeSearch} />
        { emptyQuery && <NoResults /> }
        { searching && <p className="search-searching">Searching...</p> }
        { !isEmpty(books) &&
          <SearchResults
            books={books}
            onChangeShelf={this.handleChangeShelf}
          />
        }
      </div>
    );
  }
}

export default Search;
