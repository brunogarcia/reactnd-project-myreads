import React from 'react';
import PropTypes from 'prop-types';
import randomID from 'random-id';
import Types from '../../utils/types';
import constants from '../../utils/constants';

const items = Object.entries(constants.SHELFS);

const Book = (props) => {
  const { shelf, onChange } = props;

  const renderOptions = () => (
    items.map(([key, value]) => (
      <option key={randomID()} value={key}>
        {value}
      </option>
    ))
  );

  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div className="book-shelf-changer">
      <select defaultValue="disabled" onChange={handleChange}>
        <option value="disabled" disabled>Move to...</option>
        {renderOptions(shelf)}
      </select>
    </div>
  );
};

Book.propTypes = {
  shelf: Types.shelf.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Book;
