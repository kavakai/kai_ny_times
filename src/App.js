import React, { useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <header>
        <h1>Daily Drive</h1>
      </header>
      <Routes>
        <Route exact path="/" element={<AbstractSection articles={articles}/>}/>
      </Routes>
    </div>
  );
}

export default App;
