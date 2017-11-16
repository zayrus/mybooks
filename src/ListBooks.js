import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  
  static propTypes = {
      books: PropTypes.array.isRequired
  }

  filterByShelf = (books, header) => {
    return books.filter( (book) => book.shelf === header ) 
  }
  
  dataToUpdate = (book, shelf) => {
    this.props.onUpdateBook(book, shelf)
  }
  
  render() {
        const { books } = this.props

        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
    
            <div className="list-books-content">
              <Bookshelf bookshelfUpdate={ this.dataToUpdate } books={ this.filterByShelf(books, 'currentlyReading')} header='Currently Reading'/>
              <Bookshelf bookshelfUpdate={ this.dataToUpdate } books={ this.filterByShelf(books, 'wantToRead')} header='Want to Read'/>
              <Bookshelf bookshelfUpdate={ this.dataToUpdate } books={ this.filterByShelf(books, 'read')} header='Read'/>
            </div>
            
            <div className="open-search">
              <Link to='/search' >Add a book</Link>
            </div>
          </div>
        )}


}

export default ListBooks;
