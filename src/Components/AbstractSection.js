import React from "react";
import Search from "./Search";
import Abstract from "./Abstract";
import "./AbstractSection.css"

function AbstractSection({ articles, showInfo }) {

  const abstracts = articles.map(article => {
    return <Abstract
      key={article.title}
      id={article.title}
      title={article.title}
      image={article.multimedia ? article.multimedia[2].url : null}
      alt={article.multimedia ? article.multimedia[2].caption : article.title}
      date={article.updated_date}
      author={article.byline}
      showInfo={showInfo}
    />
  })


  return (
    <div className="article_container">
      {/* <Search /> */}
      {abstracts}
    </div>
  )
}

export default AbstractSection