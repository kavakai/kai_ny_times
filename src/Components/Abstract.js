import React from "react";

function Abstract({id, section, title, abstract, image}) {

  return (
    <div>
      <img src={image} />
      <h2>{title}</h2>
      <p>{abstract}</p>
    </div>
  )
} 


export default Abstract