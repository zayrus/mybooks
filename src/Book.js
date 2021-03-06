import React from 'react'

function Book(props) { 

  function handleChange(id, element) {
    props.bookUpdate(id, element)
  }

  const { book } = props
  const image = book.imageLinks ? `url(${book.imageLinks.thumbnail})` : `url(http://scottishbooktrust.com/files/styles/book-cover-book-page/public/cover-not-available_212.png?itok=OazIlpdt)`
  const authors = book.authors ? book.authors && book.authors.join(', ') : 'Anonymous'

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: image }}></div>
        <div className="book-shelf-changer">
          <select value={ book.shelf || `none`} onChange={(event) => { handleChange({id: book.id}, event.target.value) }}>
            <option value="none" disabled>Move to... </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{ book.title }</div>
      <div className="book-authors">{ authors }</div>
    </div>

  )
}

export default Book
