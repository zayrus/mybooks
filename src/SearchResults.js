import React from 'react'
import Bookshelf from './Bookshelf'

function SearchResults(props) {

    function dataToUpdate(book, shelf) {
        props.findedBooks(book, shelf)
    }

    const { books, error } = props

    let results = null
    const header = 'Results for : ' + props.query
    
    if (books.length) {
        results = <Bookshelf bookshelfUpdate={ dataToUpdate } books={ books } header={ header }/>
    }

    if (error && props.query !=='') {
        const error = 'There are no results for: ' + props.query
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

export default SearchResults