import React from 'react';
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import Loading from './Loading'
import PropTypes from 'prop-types'

class SearchBooks extends React.Component {
  static propTypes = {
    allBooks: PropTypes.array.isRequired
  }
  state = {
      query: '',
      books: [],
      searching: false
  }

  searchBook = (query) => {
    this.setState({ query: query, searching: true })
  }

  findBookRack(allBooks,book){
    if(allBooks.length === 0){
      return 'none'
    }
    return allBooks.find((bookInLibrary) => bookInLibrary.id === book.id)? allBooks.find((bookInLibrary) => bookInLibrary.id === book.id).shelf : 'none'
  }

  render() {
      const { query, books, searching} = this.state
      const allBooks = this.props.allBooks
      if (query) {
          BooksAPI.search(query).then((books) => {
            this.setState({ books: books, searching: false })
          })
          if (books.length > 0) {
            books.sort(sortBy('title'))
          }
      }
      return (
          <div className="search-books">
              <div className="search-books-bar">
                  <Link to="/" className="close-search">Close</Link>
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                      onChange={(event) => this.searchBook(event.target.value)} />
                  </div>
              </div>
            <div className="search-books-results" style={{ opacity: searching ? 0.5 : 1 }}>
                {searching && (
                  <div className="center">
                    <Loading />
                  </div>
                )}
                <ol className="books-grid">
                  {books.length > 0 && (
                    books.map(book => (
                      <li key={book.id}>
                        <Book object={book} key={book.id} rack={ this.findBookRack(allBooks,book)}/>
                      </li>
                    ))
                  )}
                </ol>
            </div>
          </div>
      )
  }

}
export default SearchBooks