import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BuildingStyles from '../styles/buildingStyles';

const GenerateButtonComponent = () => {
  return (
    <TouchableOpacity style={BuildingStyles.buttonGenerate}>
      <Text style={BuildingStyles.buttonContent}>GENERATE LINES</Text>
    </TouchableOpacity>
  );
};

export default GenerateButtonComponent;
