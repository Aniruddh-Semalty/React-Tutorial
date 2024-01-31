import react from "react";
import reactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
const AppComponent = () => {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppComponent />,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
])

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
