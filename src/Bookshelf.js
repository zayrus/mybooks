import React, { Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {

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
                <Book  book={ book } /> 
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



