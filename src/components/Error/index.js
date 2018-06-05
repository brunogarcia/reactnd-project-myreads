import React from 'react';
import './style.css';

const Error = () => {
  const message = 'Looks like there was a problem';

  return (
    <div className="Error-main">
      <h1>Error</h1>
      <p>
        <em>{message}</em>
      </p>
    </div>
  );
};

export default Error;
