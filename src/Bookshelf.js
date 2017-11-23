import React from 'react'
import Book from './Book'

function Bookshelf(props) {

  function bookToUpdate(book, shelf) {
    props.bookshelfUpdate(book, shelf)
  }
  
  const { books, header } = props

  return (

      <div className="bookshelf">
        <h2 className="bookshelf-title">{ header }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map( book => (
              <li key={book.id} >
                <Book  bookUpdate={ bookToUpdate } book={ book } />
              </li>
              ))
            }
          </ol>
        </div>
      </div>

  )
}

export default Bookshelf



