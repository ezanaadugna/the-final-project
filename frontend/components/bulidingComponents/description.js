import React from 'react';
import { View, Text } from 'react-native';
import BuildingStyles from '../../components/styles/buildingStyles';

const DecriptionComponent = ({ descriptionText }) => {
  return (
    <View style={BuildingStyles.descriptionContainer}>
      <Text testID="descriptionText" style={BuildingStyles.descriptionText}>
        {descriptionText}
      </Text>
    </View>
  );
};

export default DecriptionComponent;
