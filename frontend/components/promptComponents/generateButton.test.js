import React from 'react';
import { render } from '@testing-library/react-native'; 
import GenerateComponent from './generateButton'; 
describe('GenerateComponent', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(<GenerateComponent text="Click Me" />); 
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeDefined();
  });
});