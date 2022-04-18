import React, { useState, useEffect} from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
import {getArticles} from "./apiCalls"
import './App.css';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
      .then(data => setArticles(data.results))
      .then(console.log(articles, "articles"))
}, [articles])

  return (
    <div className="App">
      <h1>Daily Feed</h1>
      <AbstractSection />
    </div>
  );
}

export default App;
