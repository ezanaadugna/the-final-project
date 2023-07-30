import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/styles/theme';
import BuildingStyles from '../components/styles/buildingStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBoxComponent from '../components/headerBox'; 
import { Header } from '@react-navigation/stack';


const DummyBuildingScreen = () => {
  return (
    <SafeAreaView style={BuildingStyles.buildingContainer}>
      <HeaderBoxComponent text="Building Name" />
    </SafeAreaView>
  );
};

export default DummyBuildingScreen