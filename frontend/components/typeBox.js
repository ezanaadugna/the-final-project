import React from 'react';
import { View, Text } from 'react-native';
import commonStyles from './theme';

const TypeComponent = () => {
  return (
    <View style={commonStyles.typeBox}>
      <Text style={commonStyles.typeBoxContent}>Tower</Text>
    </View>
  );
};

export default TypeComponent;
