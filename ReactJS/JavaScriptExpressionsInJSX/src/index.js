import React from "react";
import ReactDOM from "react-dom";

const fName = "Cindy";
const lName = "Le";
// const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>You lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
