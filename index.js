import React from "react";
import ReactDOM from "react-dom";

const name = "Pintu";
const lName = "Rai";
const date = new Date();
const year = date.getFullYear();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1>Hello {name + " " + lName} </h1>
    <h2>Copyright {year}</h2>

    <p>render number between 1 and 10</p>
    <p>{Math.floor(Math.random() * 10)}</p>
  </div>,
  rootElement
);
