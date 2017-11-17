import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class SearchResults extends Component {

    dataToUpdate = (book, shelf) => {
        this.props.findedBooks(book, shelf)
    }
    render() {
        const { books } = this.props
        let results = null

        if (books.length) {
            results = <Bookshelf bookshelfUpdate={ this.dataToUpdate } books={ books } header='Finded Books'/>
        }
        
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {results}
                </ol>
            </div>
        )
    }
}

export default SearchResults