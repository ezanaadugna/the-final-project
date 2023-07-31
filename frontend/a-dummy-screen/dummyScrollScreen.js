import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import commonStyles from '../components/styles/theme';
import ScrollStyles from '../components/styles/scrollStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypeBoxComponent from '../components/scrollComponents/typeBox'; 
import BuildingCardComponent from '../components/scrollComponents/buildingCards'; 

const DummyScrollScreen = () => {
  return (
    <SafeAreaView style={ScrollStyles.container}>
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
    </SafeAreaView>
  );
};

export default DummyScrollScreen;
