import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ScrollStyles from '../styles/scrollStyles';
import { useNavigation } from '@react-navigation/native';

const BuildingCardComponent = ({ imageURL, name, description}) => {
  console.log("imageURL:", imageURL);
  console.log("name:", name);
  console.log("description:", description);

  const navigation = useNavigation();
  const handleBuildingPress = () => {
    navigation.navigate('dummy page prompt', { name, description });
  };

  const photoUrl = imageURL?.[0]?.url;

  return (
    <TouchableOpacity style={ScrollStyles.centeredContainer} onPress={handleBuildingPress}>
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
