import React from "react";
import { render } from "@testing-library/react-native";
import GenerateButtonComponent from "./GenerateButton";

// Mock the module
jest.mock("@testing-library/react-native", () => {
  return {
    getByType: jest.fn(),
  };
});

// Stub implementation
import { getByType } from "@testing-library/react-native";
getByType.mockImplementation(() => {
  return { props: { onPress: jest.fn() } };
});

describe("GenerateButtonComponent", () => {
  it("passes onPress to TouchableOpacity", () => {
    const onPress = jest.fn();

    render(<GenerateButtonComponent onPress={onPress} />);

    const button = getByType();

    button.props.onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
