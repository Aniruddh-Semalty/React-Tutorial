import MOCK_DATA from "../mocks/RestaurantMenuMock.json";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu.js";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/Store/appStore.js";
import Header from "../Header.js";
import Cart from "../Cart.js";


global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });


it("should render added cart items on cart page", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart/>
          </Provider>
        </BrowserRouter>
      );
    });
    const menuTypesAccordian = screen.getByText("Menu Types");
    fireEvent.click(menuTypesAccordian);
    const menuCategoryAccordian = screen.getByText("Burgers (13)");
    fireEvent.click(menuCategoryAccordian);
    const addButtons = screen.getAllByRole("button", { name: "Add+" });
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);
    const cartItems=screen.getAllByTestId("cartItem");

    expect(cartItems.length).toBe(2);

    
  });

  it("should render empty on clear cart  items button pressed", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart/>
          </Provider>
        </BrowserRouter>
      );
    });
    const menuTypesAccordian = screen.getByText("Menu Types");
    fireEvent.click(menuTypesAccordian);
    const menuCategoryAccordian = screen.getByText("Burgers (13)");
    fireEvent.click(menuCategoryAccordian);
    const addButtons = screen.getAllByRole("button", { name: "Add+" });
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);

    const clearCartBtn=screen.getByRole("button",{name:"Clear cart"})
    fireEvent.click(clearCartBtn);
   
    const emptyStatement=screen.getByText("Empty cart please add items first");
    expect(emptyStatement).toBeInTheDocument();

    
  });

