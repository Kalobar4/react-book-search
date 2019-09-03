import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/Books/Search';
import Books from './components/Books/Books';
// import BookItem from './components/Books/BookItem';
// import { thisExpression } from '@babel/types';

// Query Url for Google Books
const userSearch = 'harry+potter';
const queryUrl1 = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}`;

class App extends Component {
  state = {
    searchName: 'harry+potter',
    books: []
  };

  componentDidMount() {
    axios
      .get(queryUrl1)
      .then(res => {
        this.setState({ books: res.data.items });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='App'>
        <Navbar header='Google Book API Search' />
        <Search
          searchFunction={this.searchFunction}
          clearFunction={this.clearFunction}
          showClear={this.state.books.length > 0 ? true : false}
        />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
