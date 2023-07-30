import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/styles/theme';
import BuildingStyles from '../components/styles/buildingStyles';
import { SafeAreaView } from 'react-native-safe-area-context';


const DummyBuildingScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.header}>Dummy Buliding Screen</Text>
    </SafeAreaView>
  );
};

export default DummyBuildingScreen