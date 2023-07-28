import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from './theme';
const CardComponent = () => {
  return (
    <View style={commonStyles.card}>
      <Text style={commonStyles.cardTitle}>Title: Building Name?</Text>
      <Text style={commonStyles.cardContent}>The Generated Line</Text>
    </View>
  );
};

export default CardComponent;
