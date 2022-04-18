import React from "react";
import Abstract from "./Abstract";

function AbstractSection({ articles }) {
  console.log(articles, "articles in section")

  const abstracts = articles.map(article => {
    <Abstract
      key={Date.now()}
      id={Date.now()}
      title={article.title}
      image={article.multimedia ? article.multimedia[2].url : null}
      alt={article.multimedia ? article.multimedia[2].caption: null}
    />
  })


  return (
    <div>
      {abstracts}
    </div>
  )
}

export default AbstractSection