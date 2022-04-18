import React, { useState, useEffect} from 'react';
// import { Route, Switch, Redirect } from 'react-router-dom';
import { getArticles } from "./apiCalls"
import AbstractSection from "./Components/AbstractSection"
import './css_reset.css';

function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles()
      .then(data => setArticles(data.results))
}, [])

  return (
    <div className="App">
      <h1>Daily Drive</h1>
      <AbstractSection articles={articles}/>
    </div>
  );
}

export default App;
