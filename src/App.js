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
    BooksAPI.getAll().then( (books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ () => (
          <ListBooks books={ this.state.books }/>
        )}/>
        <Route path='/search' render={ () => (
          <SearchBooks/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
