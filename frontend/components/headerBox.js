import React from 'react';
import { View, Text } from 'react-native';
import BuildingStyles from '../components/styles/buildingStyles';

const HeaderBoxComponent = ({ text }) => {
  return (
    <View style={BuildingStyles.headerBox}>
      <Text style={BuildingStyles.headerText}>
        {text}
      </Text>
    </View>
  );
};

export default HeaderBoxComponent;
