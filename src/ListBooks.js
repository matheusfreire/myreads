import React from 'react'
import {Link} from 'react-router-dom'
import './List.css'
import PropTypes from 'prop-types'

class ListBooks extends React.Component{
    static propTypes = {
        booksReading: PropTypes.array.isRequired,
        booksWant: PropTypes.array.isRequired,
        booksReaded: PropTypes.array.isRequired
    }
    state = {

    }

    render(){
        const {booksReading, booksWant, booksReaded} = this.props
        return( 
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div className="bookshelf">
                        <div className="bookshelf-title">
                            <h2>Currently Reading</h2>
                        </div>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {booksReading.map(book=>(
                                    <li key={book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height:193,
                                                    backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
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
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {booksWant.map(book=>(
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height:193,
                                                backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
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
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {booksReaded.map(book=>(
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height:193,
                                                backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
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
                </div>
                <div className="open-search">
                    <Link to='search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default ListBooks