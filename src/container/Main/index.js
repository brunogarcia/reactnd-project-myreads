import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';
import Header from '../../components/Header';
import Bookshelfs from '../../components/Bookshelfs';
import AddBook from '../../components/AddBook';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import * as BooksAPI from '../../BooksAPI';
import constants from '../../utils/constants';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: true,
      shelfs: constants.SHELFS,
      books: [],
    };

    this.handleChangeShelf = this.handleChangeShelf.bind(this);
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
    this.getAllBooks();
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getAllBooks() {
    BooksAPI.getAll()
      .then((books) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            books,
          });
        }
      }).catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  handleChangeShelf(book, shelf) {
    this.setState({
      loading: true,
    });

    BooksAPI.update(book, shelf)
      .then((response) => {
        if (!isEmpty(response) && this.isAlreadyMounted) {
          this.getAllBooks();
        }
      }).catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  render() {
    const {
      error,
      loading,
      shelfs,
      books,
    } = this.state;

    if (error) {
      return <Error />;
    }

    return (
      <div className="main">
        <Loading isLoading={loading} />
        <div className="list-books">
          <Header />
          <Bookshelfs
            books={books}
            shelfs={shelfs}
            onChangeShelf={this.handleChangeShelf}
          />
          <AddBook />
        </div>
      </div>
    );
  }
}

export default Main;
