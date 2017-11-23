import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

function ListBooks(props) {
  
  ListBooks.propTypes = {
      books: PropTypes.array.isRequired
  }

  function filterByShelf(books, header) {
    return books.filter( (book) => book.shelf === header ) 
  }
  
  function dataToUpdate(book, shelf) {
    props.onUpdateBook(book, shelf)
  }
  
  const { books } = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <Bookshelf bookshelfUpdate={ dataToUpdate } books={ filterByShelf(books, 'currentlyReading')} header='Currently Reading'/>
        <Bookshelf bookshelfUpdate={ dataToUpdate } books={ filterByShelf(books, 'wantToRead')} header='Want to Read'/>
        <Bookshelf bookshelfUpdate={ dataToUpdate } books={ filterByShelf(books, 'read')} header='Read'/>
      </div>
      
      <div className="open-search">
        <Link to='/search' >Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks;
