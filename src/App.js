import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

// Query Url for Google Books
const userSearch = 'harry+potter';
const queryUrl1 = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}`;

class App extends Component {
  state = {
    searchName: 'harry+potter'
  };
  render() {
    return <div className='App'>React Start</div>;
  }
}

export default App;
