import React from 'react'
import * as BooksAPI from '../BooksAPI'
import Loading from './Loading'
class BookInfo extends React.Component{

    state ={
        book:{},
        showLoading: true
    }

    componentDidMount() {
        BooksAPI.get(this.props.match.params.bookId).then((book) =>{
            this.setState({showLoading: false, book: book})
        })
      }

    render(){
        const {showLoading, book} = this.state
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                </div>
                <div>
                    { showLoading ? (
                        <div className="center">
                            <Loading />
                        </div>
                    ): (
                        <div className='col-md-12'>
                            {book.title}
                            <div className='col-md-4 col-lg-3'>
                                <div className="book-cover" style={{
                                    width: 128, height: 193,
                                    backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})`: ''
                                }}>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-9'>
                                <label>Author</label>
                                <div>{book.author}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default BookInfo;