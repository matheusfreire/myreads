import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import RackBooks from './RackBooks'

class ListBooks extends React.Component {
    static propTypes = {
        booksReading: PropTypes.array.isRequired,
        booksWant: PropTypes.array.isRequired,
        booksReaded: PropTypes.array.isRequired,
    }
    state = {

    }

    render() {
        const { booksReading, booksWant, booksReaded, showLoading } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <RackBooks title={'Currently Reading'} books={booksReading} showLoading={showLoading} />
                    <RackBooks title={'Want to Read'} books={booksWant} showLoading={showLoading}/>
                    <RackBooks title={'Read'} books={booksReaded} showLoading={showLoading}/>
                </div>
                <div className="open-search">
                    <Link to='search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default ListBooks