import React from "react";

function Abstract({id, title, image, alt}) {

  return (
    <div>
      <img src={image} alt={alt}/>
      <h2>{title}</h2>
    </div>
  )
} 


export default Abstract