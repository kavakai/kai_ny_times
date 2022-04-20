import React from "react";

const Error = ({ message }) => {
  return (
    <div>
      {message ? <h2>{message}</h2> : <h2>Ooops</h2>}
    </div>
  )
}

export default Error