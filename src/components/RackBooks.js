import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import '../List.css'

class RackBooks extends React.Component{
    static propTypes = {
        title:PropTypes.string.isRequired,
        books:PropTypes.array.isRequired
    }

    render(){
        const {title, books} = this.props
        return(
            <div className="bookshelf">
                <div className="bookshelf-title">
                    <h2>{title}</h2>
                </div>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <Book object={book} key={book.id}/>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default RackBooks