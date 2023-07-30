import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from './theme';

const CopyButtonComponent = () => {
  return (
    <View style={commonStyles.buttonCopy}>
      <Text style={commonStyles.buttonContent}>copy</Text>
    </View>
  );
};

export default CopyButtonComponent;
