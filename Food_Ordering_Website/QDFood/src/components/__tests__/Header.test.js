import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/Store/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Should Header componenet rendered", () => {
  it("Should render Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //query
    const loginButton = screen.getByRole("button", { name: "Login" }); // 1st way role is good way to find

    // const loginButton=screen.getByText("Login")// 2nd way not recommended if role can get that

    expect(loginButton).toBeInTheDocument();
  });

  it("Should render Header Component with cart items with any value", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //query
    const cartItems = screen.getByText(/Cart/); //for this case you can use regex

    expect(cartItems).toBeInTheDocument();
  });

  it("Should render Header Component with cart items with 0 value", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //query
    const cartItems = screen.getByText("Cart(0)");

    expect(cartItems).toBeInTheDocument();
  });

  it("Should render header component with logo image", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const logoImage = screen.getByRole("img");
    expect(logoImage).toBeInTheDocument();
  });

  it("Should render Online status in Header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const onlineStatus=screen.getByText(/Online Status:/);
    expect(onlineStatus).toBeInTheDocument();
  });

  it("Should change login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //query
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
