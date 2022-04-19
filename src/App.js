import React, { useState, useEffect} from 'react';
import {useNavigate, Route, Routes } from 'react-router-dom';
import { getArticles } from "./apiCalls"
import AbstractSection from "./Components/AbstractSection"
import ArticleView from './Components/ArticleView';
import "./css_reset.css";
import "./App.css"

function App() {
  let navigate = useNavigate()
  const [articles, setArticles] = useState([])
  const [singleArticle, setSingleArticle] = useState({})

  useEffect(() => {
    getArticles()
      .then(data => setArticles(data.results))
  }, [])
  
  const showInfo = (id) => {
    const article = articles.find(article => article.title === id)
    console.log(article, "single")
    setSingleArticle(article)
    navigate(`${id}`)
  }

  return (
    <div className="App">
      <header>
        <h1>Daily Drive</h1>
      </header>
      <Routes>
        <Route path="/" element={<AbstractSection articles={articles} showInfo={showInfo} />} />
        <Route path=":id" element={<ArticleView singleArticle={singleArticle}/>}/>
      </Routes>
    </div>
  );
}

export default App;
