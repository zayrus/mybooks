import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'

class SearchBooks extends Component {
    state = {
        query: ''
    }
    
    componentDidMount() {
        this.props.emptybooks()
    }

    selectedBook = (book, shelf) => {
        this.props.onUpdateBook(book, shelf)
    }

    handleSearch = (query) => {
        this.setState({ query: query })

        if (query.length !== 0) {
            this.props.searchBooks(query)
        } else {
            this.props.emptybooks()
        }
    }

    render(){
        const { books } = this.props
        const { query } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" >Close</Link>
                        <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                value={query}
                                onChange={ (event) => this.handleSearch(event.target.value)}
                            />
                        </div>
                </div>
                <SearchResults findedBooks={ this.selectedBook }  books={ books } />
            </div>
        )
    }
}
export default SearchBooks;