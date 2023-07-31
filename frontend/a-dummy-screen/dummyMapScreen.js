import React from 'react';
import { Text, View, ScrollView } from 'react-native'; // Import ScrollView
import MapStyles from '../components/styles/mapStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
// import SearchComponent from '../components/mapComponents/searchBar'; 
import MapComponent from '../components/mapComponents/mapComponent';
import BulidingComponent from '../components/mapComponents/buildingComponent';

const DummyMapScreen = () => {
  return (
    <SafeAreaView style={MapStyles.safeViewContainer}>
      <MapComponent />

      <ScrollView style={MapStyles.buildView}>
        <BulidingComponent />
        <BulidingComponent />
        <BulidingComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DummyMapScreen;
