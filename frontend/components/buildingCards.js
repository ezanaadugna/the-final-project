import React from 'react';
import { View, Text, Image } from 'react-native';
import commonStyles from './theme';

const BuildingComponent = () => {
  return (
    <View style={commonStyles.centeredContainer}>
      <View style={commonStyles.buildingCard}>
        <Image
          source={require('../assets/theShard.jpg')} // Inline require here
          style={commonStyles.buildingCardContentImage}
        />
        <View style={commonStyles.buildingCardTitleContainer}>
          <Text style={commonStyles.buildingCardTitle}>Building Title</Text>
        </View>
      </View>

      <View style={commonStyles.buildingCard}>
        <Image
          source={require('../assets/theShard.jpg')} // Inline require here
          style={commonStyles.buildingCardContentImage}
        />
        <View style={commonStyles.buildingCardTitleContainer}>
          <Text style={commonStyles.buildingCardTitle}>Building Title</Text>
        </View>
      </View>

      <View style={commonStyles.buildingCard}>
        <Image
          source={require('../assets/theShard.jpg')} // Inline require here
          style={commonStyles.buildingCardContentImage}
        />
        <View style={commonStyles.buildingCardTitleContainer}>
          <Text style={commonStyles.buildingCardTitle}>Building Title</Text>
        </View>
      </View>
    </View>
  );
};

export default BuildingComponent;
