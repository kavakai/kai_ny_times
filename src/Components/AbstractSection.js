import React from "react";
import Search from "./Search";
import Abstract from "./Abstract";
import "./AbstractSection.css"

function AbstractSection({ articles, showInfo, filteredArticles, noArticles }) {

  let display

  if (filteredArticles.length) {
    display = filteredArticles
  } else {
    display = articles
  }

  const abstracts = display.map(article => {
    return <Abstract
      key={article.title}
      id={article.title}
      title={article.title && article.title}
      image={article.multimedia && article.multimedia[2].url}
      alt={article.multimedia && article.multimedia[2].caption}
      date={article.updated_date && article.updated_date}
      author={article.byline && article.byline} 
      showInfo={showInfo}
    />
  })


  return (
    <div className="article_container">
      {noArticles ? <h2>No Articles Found...</h2> : abstracts}
    </div>
  )
}

export default AbstractSection