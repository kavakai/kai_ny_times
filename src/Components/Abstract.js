import React from "react";

function Abstract({id, title, image, alt, date}) {

  return (
    <div>
      <img src={image} alt={alt}/>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  )
} 


export default Abstract