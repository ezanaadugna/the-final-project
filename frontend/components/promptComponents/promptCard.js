import React from 'react';
import { View, Text } from 'react-native';
import PromptStyles from '../styles/promptStyles';

const PromptCardComponent = () => {
  return (
    <View style={PromptStyles.promptCard}>
      <Text style={PromptStyles.promptCardTitle}>Title?</Text>
      <Text style={PromptStyles.promptCardContent}>The Generated Line</Text>
    </View>
  );
};

export default PromptCardComponent
