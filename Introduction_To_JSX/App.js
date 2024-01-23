import React from "react";
import ReactDOM from "react-dom/client";


const Title=()=>(//shortform of react componenent
    <h2>This is another componenent and is rendered inside other componenent called component composition</h2>
);
const times=3;      //you can use javascript inside the component using {}.


//converting JSX element into Componenent
const HeadingComponent=()=>{
    return <div clssName="container">
        <h4>Here we are rendering our componenent in {times} different ways</h4>
        
        {Title()} {/* you can also render your component like this at the end of the day a component is a javascript function only*/}

        <Title></Title> {/* you can also render componenet like this*/}
        
        <Title />  {/* Easiest way*/}
    </div>
}
//component is always rendered using </>syntax
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);