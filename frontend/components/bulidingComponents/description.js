import React from 'react';
import { View, Text } from 'react-native';
import BuildingStyles from '../../components/styles/buildingStyles';


const DecriptionComponent = ({ decriptionText }) => {
  return (
    <View style={BuildingStyles.descriptionContainer}>
      <Text style={BuildingStyles.descriptionText}> {decriptionText}</Text>
    </View>

)};

export default DecriptionComponent