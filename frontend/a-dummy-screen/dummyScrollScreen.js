import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypeComponent from '../components/typeBox'; 


const DummyScrollScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.header}>Scroll Prompt Screen</Text>
      <TypeComponent />
    </SafeAreaView>
  );
};

export { DummyScrollScreen }