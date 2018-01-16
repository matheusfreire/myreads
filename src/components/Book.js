import React from 'react'
import { Link } from 'react-router-dom';

const Book = (props) =>{
        return (
            <div>
                {props.book && (
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128, height: 193,
                                backgroundImage: props.book.imageLinks ? `url(${props.book.imageLinks.thumbnail})`: ''
                            }}>
                            </div>
                            <div className="book-shelf-changer">
                                
                                <select value={props.rack} onChange={props.updateRack} >
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">
                            <Link to={{pathname: `/info/${props.book.id}`, state: true}}>
                                <span>{props.book.title}</span>
                            </Link>
                        </div>
                        <div className="book-authors">
                            {props.book.authors && (
                                props.book.authors.map(author => (
                                    <p key={author}>{author}</p>
                                ))
                            )}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Book