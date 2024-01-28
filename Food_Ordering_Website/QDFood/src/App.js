import react from "react";
import reactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

const AppComponent = () => {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
