import React from 'react';
import { Text } from 'react-native';
import MapStyles from '../components/styles/mapStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchComponent from '../components/mapComponents/searchBar'; 
import MapComponent from '../components/mapComponents/mapComponent';


const DummyMapScreen = () => {
  return (
    <SafeAreaView style={MapStyles.safeViewContainer}>
      <Text>Dummy Map Screen</Text>
      <SearchComponent />
      <MapComponent />
    </SafeAreaView>
  );
};

export default DummyMapScreen
