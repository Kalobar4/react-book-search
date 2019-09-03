import React from 'react';
import BookItem from './BookItem';
import PropTypes from 'prop-types';

const Books = props => {
  console.log('Books props', props);

  return (
    <div className='card text-center' style={bookStyle}>
      {props.books.map(book => (
        <BookItem key={book.volumeInfo.title} book={book} />
      ))}
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.array.isRequired
};

const bookStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Books;
