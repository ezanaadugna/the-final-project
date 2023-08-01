import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PromptStyles from '../styles/promptStyles';

const ButtonComponent = ({ text }) => {
  return (
    <TouchableOpacity style={PromptStyles.buttonCopy}>
      <Text style={PromptStyles.buttonContent}>{ text }</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

