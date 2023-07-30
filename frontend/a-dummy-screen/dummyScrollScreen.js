import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypeComponent from '../components/typeBox'; 
import BuildingCardComponent from '../components/buildingCards'; 


const DummyScrollScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.header}>Scroll Prompt Screen</Text>
        <View style={commonStyles.typeContainer}>
          <TypeComponent text="Tower" />
          <TypeComponent text="Mansion" />
          <TypeComponent text="Monument" />
          <TypeComponent text="Gallery" />
        </View>

      <BuildingCardComponent />

    </SafeAreaView>
    
  );
};

export { DummyScrollScreen }