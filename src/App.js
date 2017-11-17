import React from 'react'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    results: []
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
  
  searchBook = (query) => {
    console.log(query)
    BooksAPI.search(query, 20).then( (results) => {
      this.setState({ results: results})
    })
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ () => (
          <ListBooks onUpdateBook={ this.updateBookShelf } books={ this.state.books }/>
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks 
            books={ this.state.results }
            query={ this.query }
            handleSearch={ this.searchBook }
            onUpdateBook={ this.updateBookShelf }
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
