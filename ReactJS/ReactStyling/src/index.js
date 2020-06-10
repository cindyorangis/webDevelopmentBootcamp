//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const hour = new Date().getHours();

let greeting;

const customStyle = {
  color: "",
};

if (hour < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (hour < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
