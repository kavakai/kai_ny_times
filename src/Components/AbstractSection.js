import React from "react";
import Abstract from "./Abstract";

function AbstractSection({ articles }) {
  console.log(articles, "in section")

  const abstracts = articles.map(article => {
    <Abstract
      key={Date.now()}
      id={Date.now()}
      section={article.section}
      title={article.title}
      abstract={article.abstract}
      image={article.multimedia[2].url}
    />
  })


  return (
    <div>
      {abstracts}
    </div>
  )
}

export default AbstractSection