import React from 'react';
import { render } from '@testing-library/react-native';
import ButtonComponent from './button'; // Replace '../path/to/ButtonComponent' with the actual path to your ButtonComponent file

describe('ButtonComponent', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(<ButtonComponent text="Click Me" />); // Use JSX syntax to render the component
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeDefined();
  });
});
