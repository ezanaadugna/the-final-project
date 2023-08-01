import React from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import commonStyles from '../components/styles/theme';
import ScrollStyles from '../components/styles/scrollStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypeBoxComponent from '../components/scrollComponents/typeBox'; 
import BuildingCardComponent from '../components/scrollComponents/buildingCards'; 
import { useRoute } from '@react-navigation/native';

const DummyScrollScreen = () => {
  const route = useRoute();
  const { nearbyBuildings } = route.params;
  console.log("Nearby Buildings:", nearbyBuildings);

  return (
    <SafeAreaView style={ScrollStyles.container}>
      <ScrollView horizontal contentContainerStyle={ScrollStyles.typeContainer}>
        <TypeBoxComponent text="Religious" />
        <TypeBoxComponent text="Museum" />
        <TypeBoxComponent text="Monument" />
        <TypeBoxComponent text="Gallery" />
      </ScrollView>
      <FlatList
        data={nearbyBuildings}
        renderItem={({ item }) => (
          <BuildingCardComponent
            imageURL={item.photos?.[0]?.url}
            name={item.name}
          />
        )}
        keyExtractor={(item) => item.placeId}
      />
    </SafeAreaView>
 
  );
};

export default DummyScrollScreen

   // <ScrollView horizontal contentContainerStyle={ScrollStyles.typeContainer}></ScrollView>
//
