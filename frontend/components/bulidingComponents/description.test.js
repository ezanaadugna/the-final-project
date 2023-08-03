import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import DecriptionComponent from "./description"; // Assuming the correct file path

describe("DecriptionComponent", () => {
  it("renders correctly with valid description text", () => {
    const descriptionText = "Test description";
    const tree = renderer
      .create(<DecriptionComponent descriptionText={descriptionText} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with undefined description text", () => {
    const { getByTestId } = render(<DecriptionComponent />);
    const descriptionElement = getByTestId("descriptionText");
    expect(descriptionElement).toBeDefined();
    expect(descriptionElement.props.children).toBeUndefined();
  });
});
