import React from "react";
import { render } from "@testing-library/react-native";
import HeaderBoxComponent from "./headerBox";

describe("HeaderBoxComponent", () => {
  // Test to check if the component renders correctly
  it("renders correctly", () => {
    const { toJSON } = render(<HeaderBoxComponent text="Test Header" />);
    expect(toJSON()).toMatchSnapshot();
  });

  // Test to check if the correct text is displayed
  it("displays the correct text", () => {
    const { getByText } = render(<HeaderBoxComponent text="Test Header" />);
    const headerText = getByText("Test Header");
    expect(headerText).toBeDefined();
  });
});
