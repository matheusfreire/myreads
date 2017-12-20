import React from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'
import sortBy from 'sort-by'
import Book from './Book'

class RackBooks extends React.Component{
    static propTypes = {
        title:PropTypes.string.isRequired,
        books:PropTypes.array.isRequired,
        updateRack: PropTypes.func.isRequired
    }

    render(){
        const {title, books, showLoading, updateRack} = this.props
        const bookSorted = books.sort(sortBy('name'))
        return(
            <div className="bookshelf">
                <div className="bookshelf-title">
                    <h2>{title}</h2>
                </div>
                { showLoading ? (
                    <div className="center">
                      <Loading />
                    </div>
                ): (
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {bookSorted.map(book => (
                                <li key={book.id}>
                                    {Book({book: book, rack: book.shelf, 
                                        updateRack:(e) => {updateRack(e,book)}}
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        )
    }
}
export default RackBooks