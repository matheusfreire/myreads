import React from 'react';
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'


class SearchBooks extends React.Component {

  state = {
    query: ''
  }

  searchBook = (query) => {
    this.setState({ query: query })
  }

  render() {
    const { query } = this.state
    let books = []
    if (query) {
      books = JSON.stringify(BooksAPI.search(query)).books;
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
            {books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{
                      width: 128, height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">
                    {book.authors.map(author => (
                      <p key={author}>{author}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }

}
export default SearchBooks