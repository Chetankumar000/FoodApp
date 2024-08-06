import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestMenu from "../RestMenu";
import MOCK_DATA from "../mocks/mockRestMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the cart on click on restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const vada = screen.getByText("Vadas - (5)");

  fireEvent.click(vada);

  const items = screen.getAllByTestId("restItem");

  expect(items.length).toBe(5);

  const add = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(add[0]);
  fireEvent.click(add[0]);

  const cartItem = screen.getByText("Cart (2 Items)");

  expect(cartItem).toBeInTheDocument();

  const cartItems = screen.getAllByTestId("restItem");

  expect(cartItems.length).toBe(7);
});
