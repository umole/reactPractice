//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
const timeOfDay = today.getHours();
let showGreetings = "";

const DynamicCss = {
  color: "red"
};

if (timeOfDay > 0 && timeOfDay < 11) {
  showGreetings = "Good Morning";
  DynamicCss.color = "red";
} else if (timeOfDay > 10 && timeOfDay < 18) {
  showGreetings = "Good Afternoon";
  DynamicCss.color = "blue";
} else {
  showGreetings = "Good Evening";
  DynamicCss.color = "green";
}

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
ReactDOM.render(
  <h1 style={DynamicCss} className="heading">
    {showGreetings}
  </h1>,
  document.getElementById("root")
);

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
