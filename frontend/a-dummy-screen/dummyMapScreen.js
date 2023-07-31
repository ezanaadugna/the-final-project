import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/styles/theme';
import MapStyles from '../components/styles/mapStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchComponent from '../components/mapComponents/searchBar'; 
import MapComponent from '../components/mapComponents/mapComponent';


const DummyMapScreen = () => {
  return (
    <SafeAreaView style={MapStyles.safeViewContainer}>
      <Text>Dummy Map Screen</Text>
      <SearchComponent />
      <Text>give this space</Text>
      <MapComponent />
    </SafeAreaView>
  );
};

export default DummyMapScreen
