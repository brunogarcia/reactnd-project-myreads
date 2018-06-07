import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';

const { MAIN } = constants.APP.PATH;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(e) {
    const query = e.target.value.trimStart();
    this.setState({ query });
    this.props.onChangeSearch(query);
  }

  render() {
    const { query } = this.state;
    return (
      <div className="search-books-bar">
        <Link to={MAIN} className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={this.handleChangeSearch}
            placeholder="Search by title or author"
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChangeSearch: PropTypes.func.isRequired,
};

export default SearchBar;
