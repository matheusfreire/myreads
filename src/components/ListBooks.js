import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import RackBooks from './RackBooks'

class ListBooks extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateRack:PropTypes.func.isRequired
    }
    state = {

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

    render() {
        const {showLoading, updateRack, books } = this.props
        
        let booksReading = books.filter((book) => this.isReading(book.shelf))
        let booksWant = books.filter((book) => this.isWanted(book.shelf))
        let booksReaded= books.filter((book) => this.isReaded(book.shelf))
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <RackBooks title={'Currently Reading'} books={booksReading} showLoading={showLoading} updateRack={updateRack} />
                    <RackBooks title={'Want to Read'} books={booksWant} showLoading={showLoading} updateRack={updateRack} />
                    <RackBooks title={'Read'} books={booksReaded} showLoading={showLoading} updateRack={updateRack} />
                </div>
                <div className="open-search">
                    <Link to='search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default ListBooks