import React from 'react';
import { render } from '@testing-library/react-native';
import BulidingComponent from './buildingComponent';
import MapStyles from '../styles/mapStyles';

describe('BulidingComponent', () => {
  it('renders correctly with the "box" text', () => {
    const { getByText } = render(<BulidingComponent />);

    // Check if the Text component with the "box" text is rendered
    const boxText = getByText('box');
    expect(boxText).toBeDefined();
    expect(boxText.props.style).toEqual(MapStyles.boxText);
  });
});
