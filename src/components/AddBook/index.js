import React from 'react';

const AddBook = () => {
  return(
    <div className="open-search">
      <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
    </div>
  );
}

export default AddBook;