import React from "react";
import ReactDOM from "react-dom/client";

//using pure React.createElement is a bit annoying for developers
 
//jsx is converted to react element using Babel compiler and then browser renders the react element in form of html element
const jsxHeading=(
    <h1 id="heading" className="heading1">
    Hello My name is Aniruddh Semalty</h1>

);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);