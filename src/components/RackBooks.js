import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import Loading from './Loading'
import '../List.css'

class RackBooks extends React.Component{
    static propTypes = {
        title:PropTypes.string.isRequired,
        books:PropTypes.array.isRequired
    }

    render(){
        const {title, books, showLoading} = this.props
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
                            {books.map(book => (
                                <Book object={book} key={book.id}/>
                            ))}
                        </ol>
                    </div>
                )}
            </div>
        )
    }
}
export default RackBooks