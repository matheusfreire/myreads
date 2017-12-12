import React from 'react';
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'


class SearchBooks extends React.Component {

  state = {
    query: '',
    books:[]
  }

  searchBook = (query) => {
    this.setState({ query: query })
  }

  render() {
    const { query,books } = this.state
    if (query) {
      BooksAPI.search(query).then((books) => {
        this.setState({books: books})
      })
      books.sort(sortBy('title'))
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
        <div className="search-books-results">
          <ol className="books-grid">
            {books.length > 0 && (
              books.map(book => (
                <Book object={book} key={book.id}/>
              ))
            )}
            
          </ol>
        </div>
      </div>
    )
  }

}
export default SearchBooks