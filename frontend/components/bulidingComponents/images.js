import React from 'react';
import { View, Image } from 'react-native';
import BuildingStyles from '../../components/styles/buildingStyles';


const ImageComponent = ({ imageSource }) => {
  return (
      <View style={BuildingStyles.imageContainer}>
        <Image source={imageSource} style={BuildingStyles.imageStyle} />
      </View>

)};

export default ImageComponent