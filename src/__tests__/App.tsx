import * as React from "react";
import App from "../App";

describe("Main App", () => {
  it("should render without crashing", () => {
    expect(<App />).toBeDefined();
  });
});
