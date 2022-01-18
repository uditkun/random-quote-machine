import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [quotes, setQuotes] = useState();
  const [num, setNum] = useState(0);

  const colors = [
    ["#ffafbd", "#ffc3a0"],
    ["#2193b0", "#6dd5ed"],
    ["#cc2b5e", "#753a88"],
    ["#ee9ca7", "#ffdde1"],
    ["#42275a", "#734b6d"],
    ["#de6262", "#ffb88c"],
    ["#614385", "#516395"],
    ["#000428", "#004e92"],
    ["#4568dc", "#b06ab3"],
    ["#36d1dc", "#5b86e5"],
  ];

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  const nextQuote = (e) => {
    let id = Math.floor(Math.random() * 102);
    let color = Math.floor(Math.random() * 10);
    document.body.style = `background: linear-gradient(180deg,${colors[color][0]} 0%,${colors[color][1]} 100%)`;
    e.target.style = `background-color: ${colors[color][0]};color:white`;
    setNum(id);
  };

  return (
    <main className="main">
      <h1>Quote Generator App</h1>
      <Card quote={quotes} num={num} />
      <Footer next={nextQuote} />
    </main>
  );
}

export default App;
