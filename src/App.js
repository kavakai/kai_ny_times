import React, { useState, useEffect} from 'react';
import {useNavigate, Route, Routes, Redirect } from 'react-router-dom';
import { getArticles } from "./apiCalls"
import AbstractSection from "./Components/AbstractSection"
import ArticleView from './Components/ArticleView';
import "./css_reset.css";
import "./App.css"
import Search from './Components/Search';
import Error from './Components/Error';

function App() {
  let navigate = useNavigate()
  const [articles, setArticles] = useState([])
  const [singleArticle, setSingleArticle] = useState({})
  const [filteredArticles, setFilteredArticles] = useState([])
  const [noArticles, setNoArticles] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    getArticles()
      .then(data => setArticles(data.results))
      .catch(err => setErrorMsg(err))
  }, [])
  
  const showInfo = (id) => {
    const article = articles.find(article => article.title === id)
    setSingleArticle(article)
    navigate(`/article/${id}`)
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
        <h1 className="title">Welcome To The Daily Drive</h1>
      </header>
      {window.location.pathname === "/" && <Search filterArticles={filterArticles}/>}
      <Routes>
        <Route path="/" element={noArticles ? <h2 className="no-articles">No Articles Found...</h2> : <AbstractSection articles={articles} showInfo={showInfo} filteredArticles={filteredArticles} noArticles={noArticles}  />} />
        <Route path="/article/:id" element={<ArticleView singleArticle={singleArticle} />} />
        <Route path="*" element={<Error errorMsg={errorMsg} />} />
      </Routes>
    </div>
  );
}

export default App;
