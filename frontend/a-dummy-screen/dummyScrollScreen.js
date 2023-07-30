import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/styles/theme';
import ScrollStyles from '../components/styles/scrollStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypeBoxComponent from '../components/typeBox'; 
import BuildingCardComponent from '../components/buildingCards'; 


const DummyScrollScreen = () => {
  return (
    <SafeAreaView style={ScrollStyles.container}>
      <Text style={commonStyles.header}>Dummy Scroll Screen</Text>
        <View style={ScrollStyles.typeContainer}>
          <TypeBoxComponent text="Tower" />
          <TypeBoxComponent text="Mansion" />
          <TypeBoxComponent text="Monument" />
          <TypeBoxComponent text="Gallery" />
        </View>

      <BuildingCardComponent />

    </SafeAreaView>
    
  );
};

export { DummyScrollScreen }