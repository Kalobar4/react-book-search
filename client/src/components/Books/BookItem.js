import React from 'react';
import propTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const BookItem = props => {
  // console.log(props.books);

  return (
    <React.Fragment>
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
    </React.Fragment>
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
