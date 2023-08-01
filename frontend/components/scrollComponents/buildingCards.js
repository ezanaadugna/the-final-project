import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ScrollStyles from '../styles/scrollStyles';


const BuildingCardComponent = ({ imageURL, name }) => {
  console.log("imageURL:", imageURL);
  console.log("name:", name);

  const photoUrl = imageURL?.[0]?.url;

  return (
    <TouchableOpacity style={ScrollStyles.centeredContainer}>
      <View style={ScrollStyles.buildingCard}>
          {photoUrl ? (
            <Image
              source={{ uri: photoUrl }}
              style={ScrollStyles.buildingCardContentImage}
            />
          ) : (
            <View style={ScrollStyles.noImageContainer}>
            <Text style={ScrollStyles.noImageText}>No Image Available</Text>
          </View>
        )}
        <View style={ScrollStyles.buildingCardTitleContainer}>
          <Text style={ScrollStyles.buildingCardTitle}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BuildingCardComponent;
