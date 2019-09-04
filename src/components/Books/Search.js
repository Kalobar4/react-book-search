import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchFunction: PropTypes.func.isRequired,
    clearFunction: PropTypes.func.isRequired
  };

  //Method to pass this.state.text to axios through prop method searchFunction
  onSubmit = event => {
    event.preventDefault();
    this.props.searchFunction(this.state.text);
    // this.setState({ text: '' });
  };

  //Method to change state setting 'text' equal to user input
  onChange = event => this.setState({ text: event.target.value });

  render() {
    const { clearFunction, showClear } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search for a title here'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearFunction}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
