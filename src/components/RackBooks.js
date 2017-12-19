import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import Loading from './Loading'
import sortBy from 'sort-by'

class RackBooks extends React.Component{
    static propTypes = {
        title:PropTypes.string.isRequired,
        books:PropTypes.array.isRequired,
        updateRack: PropTypes.func.isRequired
    }

    render(){
        const {title, books, showLoading, updateRack} = this.props
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
                            {books.sort(sortBy('name')).map(book => (
                                <li key={book.id}>
                                    <Book object={book} key={book.id} 
                                        rack={book.shelf} 
                                        updateRack={(e) => {updateRack(e,book)}}/>
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