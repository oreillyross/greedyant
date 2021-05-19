import React from "react";
import { screen, render } from "@testing-library/react";
import { Navbar } from "../components/Navbar";
import App from "../App"

describe("Navbar", () => {
  it("should render three li", () => {
    const { getAllByRole } = render(<App />);
    expect(getAllByRole("listitem").length).toEqual(4);
  });
});
