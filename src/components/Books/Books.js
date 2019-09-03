import React, { Component, Fragment } from 'react';
// import BookItem from './BookItem';
import PropTypes from 'prop-types';

class Books extends Component {
  render() {
    return (
      <div className='card text-center'>
        {this.props.books.map(index => {
          return (
            <Fragment>
              <div>{index.volumeInfo.title}</div>
              <div>{index.volumeInfo.authors[0]}</div>
              <div>{index.volumeInfo.description}</div>
              <div>{index.volumeInfo.infoLinks}</div>
              <div>{index.volumeInfo.imageLinks.smallThumbnail}</div>
            </Fragment>
          );
        })}
      </div>
    );
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired
};

export default Books;
