import React, { Component } from 'react'
import Bookshelf from './Bookshelf'

class SearchResults extends Component {

    dataToUpdate = (book, shelf) => {
        this.props.findedBooks(book, shelf)
    }
    render() {
        const { books, error } = this.props

        let results = null
        const header = 'Results for : ' + this.props.query
        
        if (books.length) {
            results = <Bookshelf bookshelfUpdate={ this.dataToUpdate } books={ books } header={ header }/>
        }

        if (error && this.props.query !=='') {
            const error = 'There are no results for: ' + this.props.query
            results = <Bookshelf books={ books } header={ error }/>
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