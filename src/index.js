import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "/components/Dashboard";

import "./styles.css";

function App() {
  const cities = ["Nuuk, GL", "Urubici, BR", "Nairobi, KE"];
  return (
    <div className="App">
      <h1>Weather Now</h1>
      <Dashboard cities={cities} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
