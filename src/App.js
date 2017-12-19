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
    allBooks:[

    ],
    showLoading:true
  }

  updateRack = (e, book) => {
    const rack = e.target.value;
    let books = this.state.allBooks
    books = books.filter(b => b.id !== book.id).concat({book})
    BooksAPI.update(book,rack).then((booksUpdated) =>{
        this.setState({allBooks: books})
      }
    )
  }

  isReading = (rack) =>{
    return rack === "currentlyReading"
  }

  isWanted = (rack) =>{
    return rack === "wantToRead"
  }

  isReaded = (rack) =>{
    return rack === "read"
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState(state => ({
        booksReading:books.filter((book) => this.isReading(book.shelf)),
        booksWant:books.filter((book) => this.isWanted(book.shelf)),
        booksReaded: books.filter((book) => this.isReaded(book.shelf)),
        showLoading:false,
        allBooks: books
      }))
      
    })
  }

  render() {
    const { booksReading,booksWant,booksReaded, showLoading,allBooks } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <ListBooks booksReading={booksReading}
          booksWant={booksWant}
          booksReaded={booksReaded}
          showLoading={showLoading}
          updateRack={this.updateRack}/>
        }/>
        <Route exact path="/search" render={({history}) =>
          <SearchBooks allBooks={allBooks}
            updateRack={this.updateRack}/>
        }/>
      </div>
    )
  }
}

export default BooksApp
