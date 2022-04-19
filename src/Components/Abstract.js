import React from "react";
import "./Abstract.css"

function Abstract({id, title, image, alt, date, showInfo, author}) {

  return (
    <div className="article_card" onClick={() => showInfo(id)}>
      <img src={image} alt={alt} />
      <br/>
      <p>{title}</p>
      <br />
      <p>{author}</p>
      <br/>
      <p>{date.substring(0, 10)}</p>
    </div>
  )
} 


export default Abstract