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
              <div className='container'>
                <img
                  src={index.volumeInfo.imageLinks.smallThumbnail}
                  alt='url'
                  className='roundImg'
                  style={{ width: '70px ' }}
                ></img>

                <div>{index.volumeInfo.authors[0]}</div>
                <div>{index.volumeInfo.description}</div>
                <div>{index.volumeInfo.infoLinks}</div>
              </div>
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
