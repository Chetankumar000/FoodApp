import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import RestCard, { withPromotedLabel } from "../RestCard";
import MOCK_DATA from "../mocks/RestCardMock.json";
import appStore from "../../utils/appStore";

const PromotedRestCard = withPromotedLabel(RestCard);

test("should render RestaurantCard component with Promoted Label", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <UserContext.Provider value={{ logUser: "Test User" }}>
          <PromotedRestCard restData={MOCK_DATA} />
        </UserContext.Provider>
      </BrowserRouter>
    </Provider>
  );

  // Check that the restaurant name is rendered
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});

test("should render RestaurantCard component with Promoted Label", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <UserContext.Provider value={{ logUser: "Test User" }}>
          <PromotedRestCard restData={MOCK_DATA} />
        </UserContext.Provider>
      </BrowserRouter>
    </Provider>
  );

  // Check that the "Recommended" label is rendered
  const label = screen.getByText("Recommended");
  expect(label).toBeInTheDocument();
});
