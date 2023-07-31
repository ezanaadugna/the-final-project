import React from 'react';
import { Text } from 'react-native';
import MapStyles from '../components/styles/mapStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchComponent from '../components/mapComponents/searchBar'; 
import MapComponent from '../components/mapComponents/mapComponent';
import { useNavigation } from '@react-navigation/native';


const DummyMapScreen = () => {
  const navigation = useNavigation();

  const handleSeeMore = () => {
    navigation.navigate('DummyScrollScreen');
  };
  return (
    <SafeAreaView style={MapStyles.safeViewContainer}>
      <Text>Dummy Map Screen</Text>
      <SearchComponent />
      <MapComponent />
      {*/}need to add line on see more {*\}
    </SafeAreaView>
  );
};

export default DummyMapScreen
