import React, { Component } from 'react';
import SearchResults from '../../components/SearchResults';
import Error from '../../components/Error';
import * as BooksAPI from '../../BooksAPI';
import SearchBar from '../../components/SearchBar';

const MIN_LENGTH_SEARCH = 5;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      noResults: false,
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
        noResults: false,
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
        noResults: true,
      });
    } else {
      this.setState({
        books: response,
        searching: false,
        noResults: false,
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
      noResults,
      searching,
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
          noResults={noResults}
          searching={searching}
          onChangeShelf={this.handleChangeShelf}
        />
      </div>
    );
  }
}

export default Search;
