import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/styles/theme';
import BuildingStyles from '../components/styles/buildingStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBoxComponent from '../components/bulidingComponents/headerBox'; 
import ImageComponent from '../components/bulidingComponents/images'; 
import GenerateButtonComponent from '../components/bulidingComponents/generateButton'; 
import DecriptionComponent from '../components/bulidingComponents/description';
const theShardImage = require('../assets/theShard.jpg');

const DummyBuildingScreen = () => {
  return (
    <SafeAreaView style={BuildingStyles.buildingContainer}>
      <HeaderBoxComponent text="Building Name" />
      <ImageComponent imageSource={theShardImage}/>

      <DecriptionComponent decriptionText="this is the decription"/>
      <GenerateButtonComponent />

    </SafeAreaView>
  );
};

export default DummyBuildingScreen
