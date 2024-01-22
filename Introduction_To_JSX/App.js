import React from "react";
import ReactDOM from "react-dom/client";


const Title=()=>(//shortform of react componenent
    <h2>This is another componenent and is rendered inside other componenent called component composition</h2>
);

//converting JSX element into Componenent
const HeadingComponent=()=>{
    return <div clssName="container">
        <h1>Hello from functional component</h1>
        <Title />
    </div>
}
//component is always rendered using </>syntax
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);