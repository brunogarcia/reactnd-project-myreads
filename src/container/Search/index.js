import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';
// import * as BooksAPI from '../../BooksAPI'

const { MAIN } = constants.APP.PATH;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;
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
