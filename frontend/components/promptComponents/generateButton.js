import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PromptStyles from '../styles/promptStyles';

const GenerateComponent = ({ text }) => {
  return (
    <TouchableOpacity style={PromptStyles.generateButton}>
      <Text style={PromptStyles.buttonContent}>{ text }</Text>
    </TouchableOpacity>
  );
};

export default GenerateComponent;
