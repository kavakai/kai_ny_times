import React from "react";
import { Link } from "react-router-dom";
import "./ArticleView.css"

function ArticleView({ singleArticle }) {
  return (
    <section className="single_view">
      <img src={singleArticle.multimedia ? singleArticle.multimedia[1].url : singleArticle.title} />
      <br/>
      <h2>{singleArticle.title}</h2>
      <h3>{singleArticle.byline}</h3>
      <br/>
      <p>Abstract: {singleArticle.abstract}</p>
      <br/>
      <p>Published: {singleArticle.published_date.substring(0, 10)}</p>
      <br/>
      <a className="link" href={singleArticle.url}>Full Article Here</a>
      <Link className="link" to="/">Return Home</Link>
    </section>
  )
} 

export default ArticleView