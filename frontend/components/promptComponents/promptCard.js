import React from 'react';
import { View, Text } from 'react-native';
import PromptStyles from '../styles/promptStyles';

const PromptCardComponent = ({ title, generatedPrompt}) => {
  return (
    <View style={PromptStyles.promptCard}>
      <Text style={PromptStyles.promptCardTitle}>{ title }</Text>
    <Text style={PromptStyles.promptCardContent}>{ generatedPrompt }</Text>
    </View>
  );
};

export default PromptCardComponent
