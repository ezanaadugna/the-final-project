import React from 'react';
import { View, Image } from 'react-native';
import BuildingStyles from '../../components/styles/buildingStyles';

const ImageComponent = ({ imageSource }) => {
  return (
    <View style={BuildingStyles.imageContainer}>
      <View style={BuildingStyles.imageWrapper}>
        <Image source={imageSource} style={BuildingStyles.imageStyle} />
      </View>
    </View>
  );
};

export default ImageComponent;
