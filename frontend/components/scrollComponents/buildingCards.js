import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ScrollStyles from '../styles/scrollStyles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const BuildingCardComponent = ({ placeId, name, description}) => {
  const [imageURL, setImageURL] = useState(null);  
  console.log("imageURL:", imageURL);
  console.log("name:", name);
  console.log("description:", description);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchBuildingDetails = async () => {
      try {
        const response = await axios.get(
          `https://mapchat-55tf.onrender.com/buildings/${placeId}`
        );
        const data = response.data;
        setImageURL(data.photos[0]?.url);
      } catch (error) {
        console.error('Error fetching building details:', error);
      }
    };
    fetchBuildingDetails();
  }, [placeId]);

  const handleBuildingPress = () => {
    navigation.navigate('dummy page prompt', { name, description });
  };

  return (
    <TouchableOpacity style={ScrollStyles.centeredContainer} onPress={handleBuildingPress}>
      <View style={ScrollStyles.buildingCard}>
          {imageURL ? (
            <Image
              source={{ uri: imageURL }}
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
