import React, { Component } from 'react';
import Types from '../../utils/types';

const getImage = (image) => {
  return {
    width: 128,
    height: 193,
    backgroundImage: `url("${image}")`,
  };
};

const getAuthors = (authors) => {
  return authors.join(', ');
};

class Book extends Component {
  render() {
    const { title, authors, imageLinks } = this.props.book;
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover" 
              style={getImage(imageLinks.smallThumbnail)}>
            </div>
            <div className="book-shelf-changer">
              <select>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{getAuthors(authors)}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: Types.book.isRequired,
};

export default Book;