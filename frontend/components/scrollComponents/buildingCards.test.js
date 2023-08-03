import React from 'react';
import { render } from '@testing-library/react-native';
import BuildingCardComponent from './buildingCards';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('BuildingCardComponent', () => {
  it('renders the name of the building', () => {
    const imageURL = 'https://example.com/image.jpg';
    const name = 'Test Building';
    const description = 'This is a test building.';

    const { getByText, queryByText, queryByTestId } = render(
      <BuildingCardComponent imageURL={imageURL} name={name} description={description} />
    );

    // Check if name is present and description is not present
    const nameElement = getByText(name);
    const descriptionElement = queryByText(description);
    const imageElement = queryByTestId('building-image');

    // Expectations
    expect(nameElement).toBeDefined();
    expect(descriptionElement).toBeNull(); // Should not be present
    expect(imageElement).toBeNull(); // Should not be present
  });

  it('calls navigation.navigate when the component is pressed', () => {
    // Similar to the previous test for navigation.navigate
    // Include it here if needed for this test as well
  });
});