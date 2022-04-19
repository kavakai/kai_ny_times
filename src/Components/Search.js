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
      <input
        className="search-input"
        type="text"
        placeholder="Enter Keyword"
        value={inputPhrase}
        onChange={(event) => handleChange(event)}
      />
      <button className="search-input" type="submit">Submit</button>
    </form>
  )
}

export default Search