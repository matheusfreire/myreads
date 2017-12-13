import React from 'react'

class Book extends React.Component{
    render(){
        const {object, rack} = this.props
        return (
            <div>
                {object && (
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                                width: 128, height: 193,
                                backgroundImage: `url(${object.imageLinks.thumbnail})`
                            }}>
                            </div>
                            <div className="book-shelf-changer">
                                <select value={rack} >
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{object.title}</div>
                        <div className="book-authors">
                            {object.authors && (
                                object.authors.map(author => (
                                    <p key={author}>{author}</p>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default Book