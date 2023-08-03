import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import TypeBoxComponent from './typeBox'; 

describe('TypeBoxComponent', () => {
  it('renders the component correctly', () => {
    const text = 'Test Text';
    const { getByText } = render(<TypeBoxComponent text={text} />);

    // Ensure that the text content is correct
    const textElement = getByText(text);
    expect(textElement).toBeDefined();
  });
});