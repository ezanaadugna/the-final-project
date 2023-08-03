import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchComponent from "./SearchBar";

describe("SearchComponent", () => {
  it("calls onSearch prop with the correct search text", () => {
    const mockOnSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchComponent onSearch={mockOnSearch} />
    );

    const searchInput = getByPlaceholderText("Search...");

    fireEvent.changeText(searchInput, "Test search text");
    fireEvent(searchInput, "submitEditing");

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("Test search text");
  });
});
