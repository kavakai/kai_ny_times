import React from "react";
import "./Abstract.css"

function Abstract({id, title, image, alt, date, showInfo}) {

  return (
    <div className="article_card" onClick={() => showInfo(id)}>
      <img src={image} alt={alt} />
      <br/>
      <p>{title}</p>
      <br/>
      <p>{date.substring(0, 10)}</p>
      <br/>
      <p>{date.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")}</p>
    </div>
  )
} 


export default Abstract