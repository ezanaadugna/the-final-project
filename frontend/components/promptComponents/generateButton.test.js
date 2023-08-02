import React from 'react';
import { render } from '@testing-library/react-native'; // Import render from @testing-library/react-native
import GenerateComponent from './generateButton'; // Replace '../path/to/GenerateComponent' with the actual path to your GenerateComponent file

describe('GenerateComponent', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(<GenerateComponent text="Click Me" />); // Use JSX syntax to render the component
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeDefined();
  });
});
