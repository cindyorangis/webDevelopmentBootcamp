// Create a react app from scratch
import React from "react";
import ReactDOM from "react-dom";

const name = "Cindy Le";
const year = 2020;

// Display 2 paragraph HTML elements
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
