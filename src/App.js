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
// const userSearch = 'harry+potter';

class App extends Component {
  state = {
    text: 'harry+potter',
    books: []
  };

  // queryUrl1 = `https://www.googleapis.com/books/v1/volumes?q=${this.state.text}&key=${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}`;

  componentDidMount() {
    this.getBooks();
  }
  // Method to make HTTP GET to Google Books API
  getBooks = function() {
    let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.state.text}&key=${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}`;

    axios
      .get(queryUrl)
      .then(res => {
        this.setState({ books: res.data.items });
        console.log(this.state.books, '****** Axios res.data.items');
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Method to replace string space with + for queryurl
  replaceInArray = function(string) {
    return string.replace(/\s+/g, '+');
  };

  // Method to search for a specific book title
  searchFunction = text => {
    const text2 = text.trim();
    this.replaceInArray(text2);
    console.log(text2);
    text = this.setState({ text: text2 });
    this.getBooks(text2);
  };

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
