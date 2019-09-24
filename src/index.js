import React from "react";
import ReactDOM from "react-dom";

import Page from "/components/Page";
import Dashboard from "/components/Dashboard";

import "./styles.css";

function App() {
  const title = "Weather Now";
  const cities = ["Nuuk, GL", "Urubici, BR", "Nairobi, KE"];
  return (
    <Page title={title}>
      <Dashboard cities={cities} />
    </Page>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
