import React from 'react';
import PropTypes from 'prop-types';

const Toastr = ({ message }) => (
  <div className="Toastr-main">
    <p className="toastr-message">
      {message}
    </p>
  </div>
);

Toastr.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Toastr;
