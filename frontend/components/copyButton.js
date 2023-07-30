import React from 'react';
import { View, Text } from 'react-native';
import PromptStyles from './styles/promptStyles';

const CopyButtonComponent = () => {
  return (
    <View style={PromptStyles.buttonCopy}>
      <Text style={PromptStyles.buttonContent}>copy</Text>
    </View>
  );
};

export default CopyButtonComponent;
