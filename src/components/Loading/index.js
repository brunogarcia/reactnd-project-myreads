import React from 'react';
import Spinner from 'react-spinkit';
import './style.css';

const Loading = () => (
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

export default Loading;
