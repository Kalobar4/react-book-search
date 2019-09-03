import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/Books/Search';
import Books from './components/Books/Books';
import BookItem from './components/Books/BookItem';
import { thisExpression } from '@babel/types';

// Query Url for Google Books
const userSearch = 'harry+potter';
const queryUrl1 = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}`;

class App extends Component {
  state = {
    searchName: 'harry+potter',
    books: []
    // bookInfo: {},
    // title: '',
    // authors: [],
    // description: '',
    // image: '',
    // link: ''
  };

  componentDidMount() {
    axios.get(queryUrl1).then(res => {
      console.log(res.data.items);
      console.log(res.data.items[0].volumeInfo.title);

      // Set state for book card
      this.setState({ books: res.data.items });
      console.log(this.state.books[0]);
      console.log(this.state.books[1]);
      // this.setState({ bookInfo: res.data.items[0].volumeInfo });
      // this.setState({ title: res.data.items[0].volumeInfo.title });
      // this.setState({ authors: res.data.items[0].volumeInfo.authors[0] });
      // this.setState({ description: res.data.items[0].volumeInfo.description });
      // this.setState({
      //   image: res.data.items[0].volumeInfo.imageLinks.thumbnail
      // });
      // this.setState({ link: res.data.items[0].volumeInfo.infoLink });

      // console.log(this.state.title);
      // console.log(this.state.authors);
      // console.log(this.state.description);
      // console.log(this.state.image);
      // console.log(this.state.link);
    });
  }

  //Search and setState to display data based upon res.data returned
  // searchFunction = async text => {
  //   console.log(text);
  //   const res = await axios.get(
  //     `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${process.env.REACT_APP_GOOGLE_CLIENT_SECRET}`
  //   );
  //   // Set state for book card
  //   this.setState({ books: res.data.items });
  //   // this.setState({ title: res.data.items[0].volumeInfo.title });
  //   // this.setState({ authors: res.data.items[0].volumeInfo.authors[0] });
  //   // this.setState({ description: res.data.items[0].volumeInfo.description });
  //   // this.setState({
  //   //   image: res.data.items[0].volumeInfo.imageLinks.thumbnail
  //   // });
  //   // this.setState({ link: res.data.items[0].volumeInfo.infoLink });
  // };

  render() {
    return (
      <div className='App'>
        <Navbar header='Google Book API Search' />
        <Search
          searchFunction={this.searchFunction}
          clearFunction={this.clearFunction}
          showClear={this.state.books.length > 0 ? true : false}
        />
        <div className='card text-center'>
          <h6>Title: </h6>
        </div>
        {/* <BookItem books={this.state.books} /> */}
      </div>
    );
  }
}

export default App;
