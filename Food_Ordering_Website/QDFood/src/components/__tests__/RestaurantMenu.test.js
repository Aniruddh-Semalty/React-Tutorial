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



it("Should load Restaurant menu component  with menu type accordian", async () => {
  await act(async () => {
    render(<RestaurantMenu />);
  });
  const menuTypesAccordian = screen.getByText("Menu Types");
  expect(menuTypesAccordian).toBeInTheDocument();
});

it("should expand the accordian when we click on menu type accordian", async () => {
  await act(async () => {
    render(<RestaurantMenu />);
  });
  const menuTypesAccordian = screen.getByText("Menu Types");
  fireEvent.click(menuTypesAccordian);
  const menuCategoryAccordian = screen.getByText("Burgers (13)");
  expect(menuCategoryAccordian).toBeInTheDocument();
});

it("Should expand the accordian when we click on a particular menu category", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });
  const menuTypesAccordian = screen.getByText("Menu Types");
  fireEvent.click(menuTypesAccordian);
  const menuCategoryAccordian = screen.getByText("Burgers (13)");
  fireEvent.click(menuCategoryAccordian);
  const menuDish = screen.getByText("Zinger Pro Burger");
  expect(menuDish).toBeInTheDocument();
});

it("should render on header cart link if only one and two times add button is pressed", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
        </Provider>
      </BrowserRouter>
    );
  });
  const menuTypesAccordian = screen.getByText("Menu Types");
  fireEvent.click(menuTypesAccordian);
  const menuCategoryAccordian = screen.getByText("Burgers (13)");
  fireEvent.click(menuCategoryAccordian);
  const addButtons = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addButtons[1]);
  const updatedCartHeaderLink = screen.getByText("Cart(1)");
  expect(updatedCartHeaderLink).toBeInTheDocument();
  fireEvent.click(addButtons[2]);
  expect(screen.getByText("Cart(2)")).toBeInTheDocument();
});



