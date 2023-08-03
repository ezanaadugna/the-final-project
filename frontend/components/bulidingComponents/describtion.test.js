import React from "react";
import { render } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import { Text } from "react-native";
import DecriptionComponent from "./description";

describe("DecriptionComponent", () => {
  it("renders correctly", () => {
    const decriptionText = "Test description";
    const tree = renderer
      .create(<DecriptionComponent descriptionText={decriptionText} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("displays the correct decription text", () => {
    const decriptionText = "Test decription";
    const { getByText } = render(
      // Use the render function from the testing library
      <DecriptionComponent decriptionText={decriptionText} />
    );
    const decriptionElement = getByText(decriptionText);
    expect(decriptionElement).toBeDefined();
  });
});
