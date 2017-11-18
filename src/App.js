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
  emptybooks = () => this.setState({ results : [] })

  componentDidMount() {
    this.getBooks()
  }

  updateBooksFromSearch = (book, shelf) => {
    const updateResultShelf = this.state.results.map( (resultBook) => {
      if (resultBook.id === book.id) {
        resultBook.shelf = shelf
      }
      return resultBook
    })
    this.setState({ results: updateResultShelf })
    this.updateBookShelf(book, shelf)
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
    if (query.length !== 0) {
      BooksAPI.search(query, 20).then( (results) => {
        if (results.length > 0) {
          const pairBooks = results.map(searchResult => {
            this.state.books.forEach(book => {
              if (book.id === searchResult.id) {
                searchResult.shelf = book.shelf
              }
            })
            return searchResult
          })
          this.setState({ results: pairBooks })
        }
      })
    } else {
      this.emptybooks()
    }
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
            onUpdateBook={ this.updateBooksFromSearch }
            emptybooks={ this.emptybooks }
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp
