import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookItem = props => {
  console.log(props, 'BookItemprops');

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
        {props.map(book => {
          console.log(book.volumeInfo.title);
          return book.volumeInfo.title;
        })}
      </div>

      {/* <div>
        <img
          src={props.volumeInfo.imageLinks.thumbnail}
          alt='url'
          className='roundImg'
          style={{ width: '80px ' }}
        />
        <h4>{props.volumeInfo.title}</h4>
      </div>
      <div>
        <Link
          href={props.volumeInfo.infoLink}
          className='btn btnDark btn-sm my1'
        >
          {' '}
          More{' '}
        </Link>
      </div> */}
    </div>
  );
};

BookItem.propTypes = {
  book: propTypes.object.isRequired
};

const bookStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
export default BookItem;
