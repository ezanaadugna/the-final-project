import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PromptStyles from '../styles/promptStyles';

  const ButtonComponent = ({ text, onPress }) => {
    const handlePress = () => {
      console.log('Button Pressed');
      onPress();
    };
    return (
      <TouchableOpacity style={PromptStyles.buttonCopy} onPress={onPress}>
        <Text style={PromptStyles.buttonContent}>{ text }</Text>
      </TouchableOpacity>
    );
  };
export default ButtonComponent;







