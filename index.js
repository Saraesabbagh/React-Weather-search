import React from "react";
import ReactDom from "react-dom";
import Weather from "./weather";

import "./styles.css";

function App() {
  return (
    <div ClassName="App">
      <h1> React Events</h1>
      <Weather city="Paris" temperature={19} />
    </div>
  );
}

const rootElement = document.getEletmetById("root");
ReactDom.rener(<app />, rootElement);
