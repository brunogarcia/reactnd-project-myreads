import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isUndefined from 'lodash.isundefined';
import constants from '../../utils/constants';

const { MAIN } = constants.PATH;
const { WAIT_INTERVAL, ENTER_KEY, MESSAGES } = constants.SEARCH;

class SearchBar extends Component {
  state = {
    query: '',
  }

  componentWillMount() {
    this.timer = null;
  }

  handleChangeSearch =(e) => {
    const { value } = e.target;

    if (!isUndefined(value)) {
      clearTimeout(this.timer);

      this.setState({ query: value.trimStart() });

      this.timer = setTimeout(this.handleChangeTrigger, WAIT_INTERVAL);
    }
  }

  handleChangeTrigger = () => {
    const { query } = this.state;
    this.props.onChangeSearch(query);
  }

  handleKeyDownSearch = (e) => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.handleChangeTrigger();
    }
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
            autoFocus
            type="text"
            value={query}
            onKeyDown={this.handleKeyDownSearch}
            onChange={this.handleChangeSearch}
            placeholder={MESSAGES.placeholder}
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
