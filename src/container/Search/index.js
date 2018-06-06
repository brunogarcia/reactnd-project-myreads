import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';
import Error from '../../components/Error';
import * as BooksAPI from '../../BooksAPI';

const { MAIN } = constants.APP.PATH;
const MIN_LENGTH_SEARCH = 5;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      loading: false,
      error: false,
      books: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      query: value,
    }, this.checkMinLength);
  }

  checkMinLength() {
    const { query } = this.state;

    if (query.length < MIN_LENGTH_SEARCH) {
      this.setState({
        books: [],
      });
    }

    if (query.length >= MIN_LENGTH_SEARCH) {
      this.searchBooks(query);
    }
  }

  searchBooks(query) {
    BooksAPI.search(query)
      .then((books) => {
        if (this.isAlreadyMounted) {
          this.setState({
            books,
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

  render() {
    const {
      error,
      loading,
      query,
      books,
    } = this.state;

    if (error) {
      return <Error />;
    }

    console.log(books);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={MAIN} className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              onChange={this.handleChange}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default Search;
