import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'


class BooksApp extends React.Component {
  state = {
    booksReading: [
    ],
    booksWant: [
    ],
    booksReaded: [
    ],
    showLoading:true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState(state => ({
        booksReading:books.filter((book) => book.shelf === "currentlyReading"),
        booksWant:books.filter((book) => book.shelf === "wantToRead"),
        booksReaded: books.filter((book) => book.shelf === "read"),
        showLoading:false
      }))
      
    })
  }

  render() {
    const { booksReading,booksWant,booksReaded, showLoading } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <ListBooks booksReading={booksReading}
          booksWant={booksWant}
          booksReaded={booksReaded}
          showLoading={showLoading}/>
        }/>
        <Route exact path="/search" render={({history}) =>
          <SearchBooks />
        }/>
      </div>
    )
  }
}

export default BooksApp
