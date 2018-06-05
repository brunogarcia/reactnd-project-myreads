import React, { Component } from 'react';
import Bookshelf from '../../components/Bookshelf';
import AddBook from '../../components/AddBook';
// import * as BooksAPI from '../../BooksAPI'

class Main extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf />
        </div>
        <AddBook />
      </div>
    );
  }
}

export default Main;