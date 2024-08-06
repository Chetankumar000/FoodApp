import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/Body_Data.json";
import Body from "../Body";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should render the Body Component with Search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "search" });

  expect(searchBtn).toBeInTheDocument();

  const input = screen.getByTestId("searchInput");

  fireEvent.change(input, { target: { value: "south" } });

  fireEvent.click(searchBtn);

  const resCard = screen.getAllByTestId("resCard");

  expect(resCard.length).toBe(1);
});

test("Should render the Body Component with top rest", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topBtn = screen.getByRole("button", { name: "Top Restaurants" });

  expect(topBtn).toBeInTheDocument();

  fireEvent.click(topBtn);

  const resCard = screen.getAllByTestId("resCard");

  expect(resCard.length).toBe(8);
});
