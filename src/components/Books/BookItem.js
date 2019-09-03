import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookItem = props => {
  console.log(props, 'BookItemprops');
  console.log(props.books);

  props.books.map(index => {
    console.log(index.volumeInfo.title, '**********');
    console.log(index.volumeInfo.authors[0]);
    console.log(index.volumeInfo.description);
    console.log(index.volumeInfo.infoLink);
    console.log(index.volumeInfo.imageLinks);
  });

  return (
    <div className='card text-center'>
      <div
        className='card text-center'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gridGap: '1rem'
        }}
      >
        {Object.keys(props)}
      </div>

      <div>
        <img src='' alt='url' className='roundImg' style={{ width: '80px ' }} />
        <h4>Title</h4>
      </div>
      <div>
        <a href='' className='btn btnDark btn-sm my1'>
          {' '}
          More{' '}
        </a>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  books: propTypes.object.isRequired
};

const bookStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
export default BookItem;
