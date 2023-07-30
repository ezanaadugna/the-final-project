import React from 'react';
import { View, Text } from 'react-native';
import BuildingStyles from '../styles/buildingStyles';

const GenerateButtonComponent = () => {
  return (
    <View style={BuildingStyles.buttonGenerate}>
      <Text style={BuildingStyles.buttonContent}>GENERATE LINES</Text>
    </View>
  );
};

export default GenerateButtonComponent;
