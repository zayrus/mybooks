import React, { Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {

  bookToUpdate = (book, shelf) => {
    this.props.bookshelfUpdate(book, shelf)
  }
  
  render() {
    const { books, header } = this.props
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ header }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map( book => (
              <li key={book.id} >
                <Book  bookUpdate={ this.bookToUpdate } book={ book } />
              </li>
              ))
            }
          </ol>
        </div>
      </div>

    )
  }
}

export default Bookshelf



