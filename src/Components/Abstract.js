import React from "react";
import "./Abstract.css"

function Abstract({id, title, image, alt, date}) {

  return (
    <div className="article_card">
      <img src={image} alt={alt}/>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  )
} 


export default Abstract