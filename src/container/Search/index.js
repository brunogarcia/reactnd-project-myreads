import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import * as BooksAPI from '../../BooksAPI';
import Error from '../../components/Error';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import Loading from '../../components/Loading';
import constants from '../../utils/constants';
import utilSearch from '../../utils/search';

const { MIN_LENGTH, MESSAGES } = constants.SEARCH;

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
          utilSearch.createMapOfMyBookshelves(response);
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

  handleChangeShelf(book, shelf) {
    this.setState({
      message: MESSAGES.applyingChanges,
    });

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
        results: utilSearch.addShelvesToBooks(response),
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

  renderSearch() {
    const { message, results } = this.state;
    return (
      <div className="search-books">
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

  render() {
    const { error, loading } = this.state;

    if (error) {
      return <Error />;
    }

    if (loading) {
      return <Loading />;
    }

    return this.renderSearch();
  }
}

export default Search;
