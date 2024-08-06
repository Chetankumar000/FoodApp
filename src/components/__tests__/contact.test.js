import Contact from "../Contact";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("contact page test cases", () => {
  it("Checking that contact page is loading", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Checking that button is load in contact page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Checking that name placeholder is loaded in contact page", () => {
    render(<Contact />);

    const name = screen.getAllByPlaceholderText("name");

    expect(name.length).toBe(2);
  });

  it("Checking that input role is loaded in contact page", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });
});
