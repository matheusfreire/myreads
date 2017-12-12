import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    booksReading: [
    ],
    booksWant: [
    ],
    booksReaded: [
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState(state => ({
        booksReading:books.filter((book) => book.shelf === "currentlyReading"),
        booksWant:books.filter((book) => book.shelf === "wantToRead"),
        booksReaded: books.filter((book) => book.shelf === "read")
      }))
      
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <ListBooks booksReading={this.state.booksReading}
          booksWant={this.state.booksWant}
          booksReaded={this.state.booksReaded}/>
        }/>
        <Route exact path="/search" render={() =>
          <SearchBooks />
        }/>
      </div>
    )
  }
}

export default BooksApp
