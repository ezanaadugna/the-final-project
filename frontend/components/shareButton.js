import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from './theme';

const ShareButtonComponent = () => {
  return (
    <View style={commonStyles.buttonShare}>
      <Text style={commonStyles.buttonContent}>share</Text>
    </View>
  );
};

export default ShareButtonComponent;
