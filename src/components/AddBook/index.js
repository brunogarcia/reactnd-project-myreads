import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../../utils/constants';

const { SEARCH } = constants.PATH;

const AddBook = () => (
  <div className="open-search">
    <Link to={SEARCH}>Add a book</Link>
  </div>
);

export default AddBook;
