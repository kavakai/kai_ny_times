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
      return article.abstract.includes(keyword)
    })
    setFilteredArticles(filtered)
  }

  return (
    <div className="App">
      <header>
        <h1>Welcome To The Daily Drive</h1>
      </header>
      {window.location.pathname === "/" && <Search filterArticles={filterArticles}/>}
      <Routes>
        <Route path="/" element={<AbstractSection articles={articles} showInfo={showInfo} filteredArticles={filteredArticles}/>} />
        <Route path=":id" element={<ArticleView singleArticle={singleArticle}/>}/>
      </Routes>
    </div>
  );
}

export default App;
