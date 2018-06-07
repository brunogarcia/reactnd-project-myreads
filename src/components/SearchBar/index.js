import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';

const { MAIN } = constants.APP.PATH;
const { WAIT_INTERVAL, ENTER_KEY } = constants.SEARCH;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleKeyDownSearch = this.handleKeyDownSearch.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeTrigger = this.handleChangeTrigger.bind(this);
  }

  componentWillMount() {
    this.timer = null;
  }

  handleChangeSearch(e) {
    const query = e.target.value.trimStart();

    clearTimeout(this.timer);

    this.setState({ query });

    this.timer = setTimeout(this.handleChangeTrigger, WAIT_INTERVAL);
  }

  handleChangeTrigger() {
    const { query } = this.state;
    this.props.onChangeSearch(query);
  }

  handleKeyDownSearch(e) {
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
            type="text"
            value={query}
            onKeyDown={this.handleKeyDownSearch}
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
