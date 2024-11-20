//use this to get the dependencies
//old way
//var React = require("react");
//var ReactDOM = require("react-dom");
//next-gen
import React from "react";
import ReactDom from "react-dom";

//ReactDOM.render(What to show, where to show, when is it complete rendering)
ReactDom.render(
  <div>
    <h1>Hello world</h1>
    <p>
      This is me An, first time learning react, I hope i find a job soon cuz i
      am losing my shit
    </p>
  </div>,
  document.getElementById("root")
);
