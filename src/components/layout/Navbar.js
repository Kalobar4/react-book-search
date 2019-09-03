import React from 'react';
import propTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className='Navigation'>
      <nav className='navbar navbarExpandLg navbarLight bgLight mb3'>
        <h1>{props.header}</h1>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  header: 'Google Book API Search'
};

Navbar.propTypes = {
  header: propTypes.string.isRequired
};

export default Navbar;
