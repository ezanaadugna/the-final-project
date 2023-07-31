import React, { useState } from 'react';
import { Text, View } from 'react-native';
import commonStyles from '../components/styles/theme';
import PromptStyles from '../components/styles/promptStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import PromptCardComponent from '../components/promptComponents/promptCard'; 
import ButtonComponent from '../components/promptComponents/button'; 
import SwipeCards from 'react-native-swipe-cards';
import GenerateComponent from '../components/promptComponents/generateButton';

const initialPrompts = [
  { id: 1, title: 'Title 1', generatedPrompt: 'This is the generated line 1' },
  { id: 2, title: 'Title 2', generatedPrompt: 'This is the generated line 2' },
  { id: 3, title: 'Title 3', generatedPrompt: 'This is the generated line 3' },
  { id: 4, title: 'Title 4', generatedPrompt: 'This is the generated line 4' },
  { id: 5, title: 'Title 5', generatedPrompt: 'This is the generated line 5' },
  { id: 6, title: 'Title 6', generatedPrompt: 'This is the generated line 6' },
  { id: 7, title: 'Title 7', generatedPrompt: 'This is the generated line 7' },
  { id: 8, title: 'Title 8', generatedPrompt: 'This is the generated line 8' },
  { id: 9, title: 'Title 9', generatedPrompt: 'This is the generated line 9' },
  { id: 10, title: 'Title 10', generatedPrompt: 'This is the generated line 10' },
  // Add more prompts as needed
];

const DummyPromptScreen = () => {
  const [prompts, setPrompts] = useState(initialPrompts);
  // const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  const handleCardRemoved = () => {
    setPrompts((prevPrompts) => prevPrompts.slice(1));
  };

  return (
    <SafeAreaView style={PromptStyles.promptContainer}>
      <Text style={commonStyles.header}>Dummy Prompt Screen</Text>
      <SwipeCards
        cards={prompts}
        loop={false}
        renderCard={(prompt) => (
          <PromptCardComponent
            key={prompt.id}
            title={prompt.title}
            generatedPrompt={prompt.generatedPrompt}
          />
        )}
        renderNoMoreCards={() => (
          <GenerateComponent text='Generate More Prompts' />
        )}
        cardRemoved={handleCardRemoved}
      />
      <View style={PromptStyles.buttonContainer}>
        <ButtonComponent text='copy' />
        <Text>                        </Text>
        <ButtonComponent text='share' />
      </View>
    </SafeAreaView>
  );
};

export default DummyPromptScreen;