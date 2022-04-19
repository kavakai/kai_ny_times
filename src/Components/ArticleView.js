import React from "react";
import { Link } from "react-router-dom";

function ArticleView({ singleArticle }) {
  return (
    <div>
      <img src={singleArticle.multimedia ? singleArticle.multimedia[1].url : singleArticle.title} />
      <h2>Title: {singleArticle.title}</h2>
      <h3>{singleArticle.byline }</h3>
      <p>Abstract: {singleArticle.abstract}</p>
      <p>Published: {singleArticle.published_date.substring(0, 10)}</p>
      <a href={singleArticle.url}>Full Article</a>
      <Link to="/">Home</Link>


    </div>
  )
} 

export default ArticleView