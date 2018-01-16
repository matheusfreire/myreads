import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import BookInfo from './components/BookInfo'


class BooksApp extends React.Component {
  state = {
    allBooks:[

    ],
    showLoading:true
  }

  updateRack = (e, book) => {
    const rack = e.target.value;
    BooksAPI.update(book,rack).then(() =>{
      book.shelf = rack
      this.setState(state => ({
        showLoading: true,
        allBooks: state.allBooks.filter((b) => b.id !== book.id).concat([book])
      }))
    })
  }

  //Função para desabilitar o loading após o updateRack
  componentDidUpdate(){
    if(this.state.showLoading){
      this.setState({showLoading:false})
    }
  }

  

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      this.setState(state => ({
        showLoading:false,
        allBooks: books
      }))
      
    })
  }

  render() {
    const { showLoading,allBooks } = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => 
          <ListBooks books={allBooks} showLoading={showLoading}
          updateRack={this.updateRack}/>
        }/>
        <Route exact path="/search" render={({history}) =>
          <SearchBooks allBooks={allBooks}
            updateRack={this.updateRack}/>
        }/>
        <Route exact path="/info/:bookId" component={BookInfo}/>
      </div>
    )
  }
}

export default BooksApp
