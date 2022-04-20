import React from "react";
import { Link } from "react-router-dom";
import "./ArticleView.css"

function ArticleView({ singleArticle }) {
  return (
    <section className="single_view">
      <img src={singleArticle.multimedia && singleArticle.multimedia[1].url} />
      <br/>
      <h2>{singleArticle.title && singleArticle.title}</h2>
      <h3>{singleArticle.byline && singleArticle.byline}</h3>
      <br/>
      <p>Abstract: {singleArticle.abstract && singleArticle.abstract}</p>
      <br/>
      <p>Published: {singleArticle.published_date && singleArticle.published_date.substring(0, 10)}</p>
      <br/>
      {singleArticle.url && <a className="link" href={singleArticle.url}>Full Article Here</a>}
      <Link className="link" to="/">Return Home</Link>
    </section>
  )
} 

export default ArticleView