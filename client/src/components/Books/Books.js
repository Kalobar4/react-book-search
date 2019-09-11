import React, { Component, Fragment } from 'react';
// import BookItem from './BookItem';
import PropTypes from 'prop-types';
import Axios from 'axios';

class Books extends Component {
  addCollection = book => {
    Axios.post('/', book).then(res => {
      console.log(res, 'RESULT from Server');
      alert(res.data.title + ' was added to the collection');
    });
  };
  render() {
    return (
      <div className='card text-center'>
        {this.props.books.map(index => {
          return (
            <Fragment>
              <div>{!index.volumeInfo.title ? '' : index.volumeInfo.title}</div>
              <div className='container'>
                <img
                  src={
                    !index.volumeInfo.imageLinks.smallThumbnail
                      ? ''
                      : index.volumeInfo.imageLinks.smallThumbnail
                  }
                  alt='url'
                  className='roundImg'
                  style={{ width: '70px ' }}
                ></img>

                <div>
                  {!index.volumeInfo.authors ? '' : index.volumeInfo.authors[0]}
                </div>
                <div>
                  {!index.volumeInfo.description
                    ? ''
                    : index.volumeInfo.description}
                </div>
                <div>
                  {!index.volumeInfo.infoLinks
                    ? ''
                    : index.volumeInfo.infoLinks}
                </div>
                <button
                  key={index.id}
                  className='btn btn-primary btn-large'
                  onClick={() => {
                    this.addCollection(index);
                  }}
                >
                  Add to Collection
                </button>
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
