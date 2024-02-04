import react,{lazy,Suspense} from "react";
import reactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import ShimmerUi from "./components/ShimmerUi";

                            //Chunking or Lazy loading
const Contact=lazy(()=>import("./components/Contact"));
const About =lazy(()=>import("./components/About"));
const RestaurantMenu=lazy(()=>import("./components/RestaurantMenu"));
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
        element:<Suspense fallback={<h1>Loading...</h1>}> <About /></Suspense>,
      },
      {
        path: "/contact",
        element:<Suspense fallback={<h1>Loading...</h1>}> <Contact /></Suspense>,
      },
      {
        path:"/restaurant/:resid",
        element:<Suspense fallback={<ShimmerUi />}><RestaurantMenu/></Suspense>
      }
    ],
    errorElement: <Error />,
  }
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
