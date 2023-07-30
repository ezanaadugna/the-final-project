import React from 'react';
import { View, Text, Image } from 'react-native';
import commonStyles from './styles/theme';
import ScrollStyles from '../components/styles/scrollStyles';

const BuildingCardComponent = () => {
  return (
    <View style={ScrollStyles.centeredContainer}>
      <View style={ScrollStyles.buildingCard}>
        <Image
          source={require('../assets/theShard.jpg')} // Inline require here
          style={ScrollStyles.buildingCardContentImage}
        />
        <View style={ScrollStyles.buildingCardTitleContainer}>
          <Text style={ScrollStyles.buildingCardTitle}>Building Title</Text>
        </View>
      </View>

      <View style={ScrollStyles.buildingCard}>
        <Image
          source={require('../assets/theShard.jpg')} // Inline require here
          style={ScrollStyles.buildingCardContentImage}
        />
        <View style={ScrollStyles.buildingCardTitleContainer}>
          <Text style={ScrollStyles.buildingCardTitle}>Building Title</Text>
        </View>
      </View>

      <View style={ScrollStyles.buildingCard}>
        <Image
          source={require('../assets/theShard.jpg')} // Inline require here
          style={ScrollStyles.buildingCardContentImage}
        />
        <View style={ScrollStyles.buildingCardTitleContainer}>
          <Text style={ScrollStyles.buildingCardTitle}>Building Title</Text>
        </View>
      </View>
    </View>
  );
};

export default BuildingCardComponent;
