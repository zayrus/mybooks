import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( () => {
      this.getBooks()
    })
  }
  
  getBooks = () => {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books: books })
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ () => (
          <ListBooks onUpdateBook={ this.updateBookShelf } books={ this.state.books }/>
        )}/>
        <Route path='/search' render={ () => (
          <SearchBooks/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
