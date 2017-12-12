import React from 'react'
import { Link } from 'react-router-dom'
import '../List.css'
import PropTypes from 'prop-types'
import RackBooks from './RackBooks'

class ListBooks extends React.Component {
    static propTypes = {
        booksReading: PropTypes.array.isRequired,
        booksWant: PropTypes.array.isRequired,
        booksReaded: PropTypes.array.isRequired
    }
    state = {

    }

    render() {
        const { booksReading, booksWant, booksReaded } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <RackBooks title={'Currently Reading'} books={booksReading} />
                    <RackBooks title={'Want to Read'} books={booksWant} />
                    <RackBooks title={'Read'} books={booksReaded} />
                </div>
                <div className="open-search">
                    <Link to='search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default ListBooks