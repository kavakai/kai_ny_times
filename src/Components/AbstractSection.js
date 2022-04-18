import React from "react";
import Abstract from "./Abstract";

function AbstractSection({ articles }) {

  const abstracts = articles.map(article => {
    return <Abstract
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