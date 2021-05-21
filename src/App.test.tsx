import { expect } from "chai";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("doesn't crash", () => {
    const container = render(<App />);
    expect(!!container);
  });
});
