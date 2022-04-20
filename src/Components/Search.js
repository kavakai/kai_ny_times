import React, { useState } from "react";
import "./Search.css"

const Search = ({ filterArticles }) => {

  const [inputPhrase, setInputPhrase] = useState("")

  const handleChange = (event) => {
    event.preventDefault()
    setInputPhrase(event.target.value)
    filterArticles(inputPhrase)
  }

  return (
    <form className="search-form">
      <div className="inputs">
        <label className="search-label">Filter by Keyword:</label>
        <input
          className="search-input"
          name="search"
          type="text"
          placeholder="Enter Keyword"
          value={inputPhrase}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </form>
  )
}

export default Search