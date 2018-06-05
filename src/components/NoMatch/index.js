import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NoMatch = ({ location }) => (
  <div className="NoMatch-main">
    <h1>Error</h1>
    <p>
      No match for <em>{location.pathname}</em>
    </p>
  </div>
);

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoMatch;
