import React from 'react';
import { render, waitFor, queryByText } from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MapComponent from './MapComponent';

// Create a new instance of axios mock adapter
const mock = new MockAdapter(axios);

// Mock the API response
const mockResponse = [
  { name: 'Building 1', location: { coordinates: [40.7128, -74.0060] } },
  { name: 'Building 2', location: { coordinates: [34.0522, -118.2437] } },
];

mock.onGet('https://mapchat-55tf.onrender.com/buildings').reply(200, mockResponse);

// Mock the expo-location functions
jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn().mockResolvedValue({ status: 'granted' }),
  getCurrentPositionAsync: jest.fn().mockResolvedValue({ coords: { latitude: 40.7128, longitude: -74.0060 } }),
}));

// Mock the MapView component
jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  return {
    __esModule: true,
    default: (props) => {
      return <View {...props} testID="mapContainer" />;
    },
    Marker: (props) => {
      return <View {...props} />;
    },
  };
});

describe('MapComponent', () => {
  test('renders correctly with mocked API response', async () => {
    // Render the component
    const { getByTestId, queryByText } = render(<MapComponent />);

    // Wait for the API request and location permission to be resolved
    await waitFor(() => {
      // Check if the map is rendered
      const mapContainer = getByTestId('mapContainer');
      expect(mapContainer).toBeDefined();
    });

    // Check if the markers are rendered
    const building1Marker = queryByText('Building 1');
    const building2Marker = queryByText('Building 2');

    expect(building1Marker).toBeDefined();
    expect(building2Marker).toBeDefined();
  });
});
