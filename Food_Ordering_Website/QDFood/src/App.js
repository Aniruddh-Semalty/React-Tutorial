import react from "react";
import reactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
const AppComponent = () => {
  return (
    <div>
      <Header />
      <Outlet/>  {/*Outlet componenet is replaced by children routes*/}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  }
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
