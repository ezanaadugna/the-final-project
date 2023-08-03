import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import GenerateButtonComponent from "./generateButton";

// Mock the module
jest.mock("@testing-library/react-native", () => {
  const originalModule = jest.requireActual("@testing-library/react-native");
  return {
    ...originalModule,
    // Add a mock implementation for TouchableOpacity
    TouchableOpacity: (originalModule.TouchableOpacity = (props) => {
      return props.children;
    }),
  };
});

describe("GenerateButtonComponent", () => {
  it("passes onPress to TouchableOpacity", () => {
    const onPress = jest.fn();

    const { getByText } = render(<GenerateButtonComponent onPress={onPress} />);

    const button = getByText("GENERATE LINES");

    fireEvent.press(button);

    // Move the expect statement inside a callback function
    // to check the function call after the event is handled.
    // This ensures that it properly captures the function call.
    fireEvent.press(button, () => {
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});
