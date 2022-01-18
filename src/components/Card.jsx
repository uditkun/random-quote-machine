import React from "react";
import Quotes from "./Quotes";

function Card({ quote, num }) {
  return (
    <>
      <div className="card">
        <div>{quote && <Quotes quote={quote} num={num} />}</div>
      </div>
      <div className="author"> -{quote && quote.quotes[num].author}</div>
    </>
  );
}

export default Card;
