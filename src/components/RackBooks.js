import React from 'react'
import Loading from './Loading'
import sortBy from 'sort-by'
import Book from './Book'

const RackBooks = (props)=>{

    const bookSorted = props.books.sort(sortBy('name'))
    return(
        
        <div className="bookshelf">
            <div className="bookshelf-title">
                <h2>{props.title}</h2>
            </div>
            { props.showLoading ? (
                <div className="center">
                    <Loading />
                </div>
            ): (
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookSorted.map(book => (
                            <li key={book.id}>
                                {Book({book: book, rack: book.shelf, 
                                    updateRack:(e) => {props.updateRack(e,book)}}
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    )
}
export default RackBooks