import React from "react";
import { screen, render } from "@testing-library/react";
import { Navbar } from "../components/Navbar";

describe("Navbar", () => {
  it("should render three li", () => {
    const { getAllByRole } = render(<Navbar />);
    expect(getAllByRole("listitem").length).toEqual(3);
  });
});
