import React from "react";
import "./Error.css"

const Error = ({ message }) => {
  return (
    <section className="error-holder">
      {message ? <h2 className="error">{message}</h2> : <h2 className="error">Ooops! Nothing Here...</h2>}
    </section>
  )
}

export default Error