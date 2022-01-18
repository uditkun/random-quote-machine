import React from "react";

function Button({ next }) {
  return <button onClick={(e) => next(e)}>New Quote</button>;
}

export default Button;
