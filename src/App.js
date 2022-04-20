import React, { useState, useEffect} from 'react';
import {useNavigate, Route, Routes } from 'react-router-dom';
import { getArticles } from "./apiCalls"
import AbstractSection from "./Components/AbstractSection"
import ArticleView from './Components/ArticleView';
import "./css_reset.css";
import "./App.css"
import Search from './Components/Search';

function App() {
  let navigate = useNavigate()
  const [articles, setArticles] = useState([])
  const [singleArticle, setSingleArticle] = useState({})
  const [filteredArticles, setFilteredArticles] = useState([])
  const [noArticles, setNoArticles] = useState(false)

  useEffect(() => {
    getArticles()
      .then(data => setArticles(data.results))
  }, [])
  
  const showInfo = (id) => {
    const article = articles.find(article => article.title === id)
    setSingleArticle(article)
    navigate(`${id}`)
  }

  const filterArticles = (keyword) => {
    const filtered = articles.filter(article => {
      return article.title.match(keyword)
    })
    if (filtered.length) {
      setFilteredArticles(filtered)
      setNoArticles(false)
    } else {
      setNoArticles(true)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome To The Daily Drive</h1>
      </header>
      {window.location.pathname === "/" && <Search filterArticles={filterArticles}/>}
      <Routes>
        <Route path="/" element={noArticles ? <h2>No Articles Found...</h2> : <AbstractSection articles={articles} showInfo={showInfo} filteredArticles={filteredArticles} noArticles={noArticles}  />} />
        <Route path=":id" element={<ArticleView singleArticle={singleArticle}/>}/>
      </Routes>
    </div>
  );
}

export default App;
