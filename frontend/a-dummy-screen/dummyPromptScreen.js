import React from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/styles/theme';
import PromptStyles from '../components/styles/promptStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import PromptCardComponent from '../components/promptComponents/promptCard'; 
import ButtonComponent from '../components/promptComponents/button'; 

const DummyPromptScreen = () => {
  return (
    <SafeAreaView style={PromptStyles.promptContainer}>
      <Text style={commonStyles.header}>Dummy Prompt Screen</Text>
      <PromptCardComponent title='Title' generatedPrompt='This is the generated line'/>
      <View style={PromptStyles.buttonContainer}>
        <ButtonComponent text='copy'/>
        <Text>                        </Text>
        <ButtonComponent text='share' />
      </View>
    </SafeAreaView>
  );
};

export default DummyPromptScreen