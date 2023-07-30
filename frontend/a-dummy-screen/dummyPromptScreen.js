import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from '../components/promptCard'; 
import CopyButtonComponent from '../components/copyButton'; 
import ShareButtonComponent from '../components/shareButton'; 

const DummyPromptScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <Text style={commonStyles.header}>Dummy Prompt Screen</Text>

      <CardComponent />
      <View style={commonStyles.buttonContainer}>
        <CopyButtonComponent />
        <Text>               </Text>
        <ShareButtonComponent />
      </View>
    </SafeAreaView>
  );
};

export { DummyPromptScreen }