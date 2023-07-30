import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from './styles/theme';
import PromptStyles from '../components/styles/promptStyles';

const CardComponent = () => {
  return (
    <View style={PromptStyles.promptCard}>
      <Text style={PromptStyles.promptCardTitle}>Title?</Text>
      <Text style={PromptStyles.promptCardContent}>The Generated Line</Text>
    </View>
  );
};

export default CardComponent;
