import React from "react";

function Quotes({ quote, num }) {
  return <p className="quote">{quote.quotes[num].quote}</p>;
}

export default Quotes;
