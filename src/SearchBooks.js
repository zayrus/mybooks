import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'

class SearchBooks extends Component {
    componentDidMount() {
        this.props.emptybooks()
    }

    selectedBook = (book, shelf) => {
        this.props.onUpdateBook(book, shelf)
    }

    render(){
        const { query, books } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        {}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={ (event) => this.props.handleSearch(event.target.value)}
                        />
                    </div>
                </div>
                <SearchResults findedBooks={ this.selectedBook }  books={ books } />
            </div>
        )
    }
}
export default SearchBooks;