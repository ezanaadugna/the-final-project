import React from 'react';
import { Text } from 'react-native';
import commonStyles from './components/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from './components/card-dummy'; 

const DummyPage = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.header}>Dummy Page</Text>

      <CardComponent />
    </SafeAreaView>
  );
};

console.log(commonStyles);

export { DummyPage }