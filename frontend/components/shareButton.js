import React from 'react';
import { View, Text } from 'react-native';
import PromptStyles from './styles/promptStyles';

const ShareButtonComponent = () => {
  return (
    <View style={PromptStyles.buttonShare}>
      <Text style={PromptStyles.buttonContent}>share</Text>
    </View>
  );
};

export default ShareButtonComponent;
