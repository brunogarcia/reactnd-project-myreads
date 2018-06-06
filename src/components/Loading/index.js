import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import './style.css';

const Loading = (props) => {
  const { isLoading } = props;

  if (isLoading) {
    return (
      <div className="Loading-main">
        <div className="Loading-opacity" />
        <Spinner
          className="Loading-spinner"
          fadeIn="none"
          name="folding-cube"
          color="steelblue"
        />
      </div>
    );
  }

  return null;
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
