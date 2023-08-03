import React from 'react';
import { render } from '@testing-library/react-native';
import ButtonComponent from './button'; 

describe('ButtonComponent', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(<ButtonComponent text="Click Me" />); 
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeDefined();
  });
});