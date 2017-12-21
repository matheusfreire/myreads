import React from 'react'
import { Link } from 'react-router-dom'
import RackBooks from './RackBooks'

const ListBooks=(props) =>{
    
    function isReading(rack){
        return rack === "currentlyReading"
    }

    function isWanted(rack){
        return rack === "wantToRead"
    }

    function isReaded(rack){
        return rack === "read"
    }

    const booksReading = props.books.filter((book) => isReading(book.shelf))
    const booksWant = props.books.filter((book) => isWanted(book.shelf))
    const booksReaded= props.books.filter((book) => isReaded(book.shelf))
        
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {RackBooks(
                    {title: 'Currently Reading', books: booksReading, 
                    showLoading: props.showLoading, updateRack: props.updateRack}
                )}
                {RackBooks(
                    {title: 'Want to Read', books: booksWant, 
                    showLoading: props.showLoading, updateRack: props.updateRack}
                )}
                {RackBooks(
                    {title: 'Read', books: booksReaded, 
                    showLoading: props.showLoading, updateRack: props.updateRack}
                )}
            </div>
            <div className="open-search">
                <Link to='search'>Add a book</Link>
            </div>
        </div>
    )
}
export default ListBooks