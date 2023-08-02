import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import commonStyles from '../components/styles/theme';
import PromptStyles from '../components/styles/promptStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import PromptCardComponent from '../components/promptComponents/promptCard'; 
import ButtonComponent from '../components/promptComponents/button'; 
import SwipeCards from 'react-native-swipe-cards';
import GenerateComponent from '../components/promptComponents/generateButton';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavBar from './BottomNavBar';
import * as Sharing from 'expo-sharing';
// 


const Stack = createStackNavigator();

const initialPrompts = [
  { id: 1, title: 'Title 1', generatedPrompt: 'Loading pick up line.....' },
  { id: 2, title: 'Title 2', generatedPrompt: 'Loading pick up line.....' },
  { id: 3, title: 'Title 3', generatedPrompt: 'Loading pick up line.....' },
  { id: 4, title: 'Title 4', generatedPrompt: 'Loading pick up line.....' },
  { id: 5, title: 'Title 5', generatedPrompt: 'Loading pick up line.....' },
  { id: 6, title: 'Title 6', generatedPrompt: 'Loading pick up line.....' },
  { id: 7, title: 'Title 7', generatedPrompt: 'Loading pick up line.....' },
  { id: 8, title: 'Title 8', generatedPrompt: 'Loading pick up line.....' },
  { id: 9, title: 'Title 9', generatedPrompt: 'Loading pick up line.....' },
  { id: 10, title: 'Title 10', generatedPrompt: 'Loading pick up line.....' },
  // Add more prompts as needed
];
const styles = StyleSheet.create({
  text: {
  },
});

const Custom = () => <Text style={styles.text}></Text>; // Custom "nope" component

const PromptScreenManual = () => {
  //const route = useRoute();

  const [prompts, setPrompts] = useState(initialPrompts);
  const [userinput, setuserinput] = useState('');
  const [responseText, setResponseText] = useState('');
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

   useEffect(() => {
    fetchPickupLine();
   }, []);

  const fetchPickupLine = () => {
    const data = {
       userinput: userinput
   };

    axios.get('https://mapchat-55tf.onrender.com/chat', { params: data })
      .then(response => {
        console.log('Response from server:', response.data);
        const pickupLine = response.data.pickupline.replace(/"/g, '');

        setPrompts(prevPrompts => {
          const updatedPrompts = [...prevPrompts];
          updatedPrompts[currentPromptIndex].generatedPrompt = pickupLine;
          return updatedPrompts;
        });
      })

      .catch(error => {
        console.error('Error:', error);
        //setResponseText('Error: ' + error.message);
      });
  }

  const handleSubmit = () => {
    // Call the fetchPickupLine function to get a new pickup line
    fetchPickupLine();
  };


  const handleCardRemoved = () => {
    // Update the currentPromptIndex and fetch new response when a card is removed (swiped)
    setCurrentPromptIndex(prevIndex => prevIndex + 1);
    handleSubmit();
  };

  return (
    <SafeAreaView style={PromptStyles.promptContainer}>
         <View style={PromptStyles.inputBox}>
         <TextInput
          placeholder="Add..."
          value={userinput}
          onChangeText={text => setuserinput(text)}
        />
        </View>
        <TouchableOpacity style={PromptStyles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      <Text style={styles.responseText}>
      </Text> 
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
        renderNope={() => <Custom />}
        renderYup={() => <Custom />}
        styles={PromptStyles.swipeCard}
      />
      <View style={PromptStyles.buttonContainer}>
       <ButtonComponent text='TEST' />
       <Text>                     </Text> 
       <ButtonComponent text='share' onPress={() => Sharing.shareAsync(prompts)} />
      </View> 
      
      <BottomNavBar navigation={Stack.navigation} />
    </SafeAreaView>
  );
};

export default PromptScreenManual;