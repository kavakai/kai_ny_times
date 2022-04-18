import React from "react";
import Abstract from "./Abstract";
import "./AbstractSection.css"

function AbstractSection({ articles, showInfo }) {

  const abstracts = articles.map(article => {

    return <Abstract
      key={Date.now()}
      id={Date.now()}
      title={article.title}
      image={article.multimedia ? article.multimedia[2].url : null}
      alt={article.multimedia ? article.multimedia[2].caption : article.title}
      date={article.updated_date}
      showInfo={showInfo}
    />
  })


  return (
    <div className="article_container">
      {abstracts}
    </div>
  )
}

export default AbstractSection