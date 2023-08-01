import React from 'react';
<<<<<<< HEAD
import { Text, View, Image, ScrollView } from 'react-native';
=======
import { Text, View, Image, FlatList } from 'react-native';
>>>>>>> 0a9a8b05be91b42879b60375d767108a3258379d
import commonStyles from '../components/styles/theme';
import ScrollStyles from '../components/styles/scrollStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypeBoxComponent from '../components/scrollComponents/typeBox'; 
import BuildingCardComponent from '../components/scrollComponents/buildingCards'; 
<<<<<<< HEAD
=======
import { useRoute } from '@react-navigation/native';
>>>>>>> 0a9a8b05be91b42879b60375d767108a3258379d

const DummyScrollScreen = () => {
  const route = useRoute();
  const { nearbyBuildings } = route.params;
  console.log("Nearby Buildings:", nearbyBuildings);

  return (
    <SafeAreaView style={ScrollStyles.container}>
<<<<<<< HEAD
      <ScrollView horizontal contentContainerStyle={ScrollStyles.typeContainer}>
      <TypeBoxComponent text="Tower" />
        <TypeBoxComponent text="Museum" />
        <TypeBoxComponent text="Monument" />
        <TypeBoxComponent text="Gallery" />
        <TypeBoxComponent text="Tower" />
        <TypeBoxComponent text="Museum" />
        <TypeBoxComponent text="Monument" />
        <TypeBoxComponent text="Gallery" />
      </ScrollView>

      <ScrollView>
      <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
        <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
        <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
        <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
        <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
        <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
        <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
        <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
      </ScrollView>
=======
      <Text style={commonStyles.header}>Dummy Scroll Screen</Text>
        <View style={ScrollStyles.typeContainer}>
          <TypeBoxComponent text="Religious" />
          <TypeBoxComponent text="Museum" />
          <TypeBoxComponent text="Monument" />
          <TypeBoxComponent text="Gallery" />
        </View>
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
>>>>>>> 0a9a8b05be91b42879b60375d767108a3258379d
    </SafeAreaView>
  );
};

<<<<<<< HEAD
export default DummyScrollScreen;
=======
export default DummyScrollScreen


>>>>>>> 0a9a8b05be91b42879b60375d767108a3258379d
