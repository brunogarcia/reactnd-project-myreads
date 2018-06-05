import React from 'react';
import './style.css';

const Loading = () => {
  const message = 'Loading...';

  return (
    <div className="Loading-main">
      <p>
        <em>{message}</em>
      </p>
    </div>
  );
};

export default Loading;
