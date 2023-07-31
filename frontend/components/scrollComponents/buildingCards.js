import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ScrollStyles from '../styles/scrollStyles';

const BuildingCardComponent = ({ imageURL }) => {
  return (
    <TouchableOpacity style={ScrollStyles.centeredContainer}>
      <View style={ScrollStyles.buildingCard}>
        <Image
          source={{ uri: imageURL }}
          style={ScrollStyles.buildingCardContentImage}
        />
        <View style={ScrollStyles.buildingCardTitleContainer}>
          <Text style={ScrollStyles.buildingCardTitle}>Building Title</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BuildingCardComponent;
