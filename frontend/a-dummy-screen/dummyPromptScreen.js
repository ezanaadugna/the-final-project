import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/styles/theme';
import PromptStyles from '../components/styles/promptStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import PromptCardComponent from '../components/promptComponents/promptCard'; 
import CopyButtonComponent from '../components/promptComponents/copyButton'; 
import ShareButtonComponent from '../components/promptComponents/shareButton'; 

const DummyPromptScreen = () => {
  return (
    <SafeAreaView style={PromptStyles.promptContainer}>
      <Text style={commonStyles.header}>Dummy Prompt Screen</Text>

      <PromptCardComponent />
      <View style={PromptStyles.buttonContainer}>
        <CopyButtonComponent />
        <Text>               </Text>
        <ShareButtonComponent />
      </View>
    </SafeAreaView>
  );
};

export default DummyPromptScreen