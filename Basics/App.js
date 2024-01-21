import React from "react";
import  ReactDOM  from "react-dom/client";
const heading=React.createElement("h1",{id:"heading"},"Hello world from React !"); //heading is now an React element and react element is basically javascript objects
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render method is basically converting the putting react element  inside the root element .All the things which are present in root div will be replaced by heading react element


/*
How to create Nested react elements

<div id="parent">
    <div id="child1">
    <h1>I am first child </h1>
    <h1>I am second child</h1>
    </div>
     <div id="child2">
    <h1>I am first child </h1>
    <h1>I am second child</h1>
    </div>

</div>
*/

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am first child"),
        React.createElement("h1",{},"I am second child")
        ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am first child"),
        React.createElement("h1",{},"I am second child")
        ])

    ]
  
)       //the above code is so messy if we want to make more and more childs so that's JSX came into the picture 
root.render(parent)