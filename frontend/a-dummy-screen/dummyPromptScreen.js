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
// 


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

const DummyPromptScreen = () => {
  const route = useRoute();
  const { name } = route.params;
  const { description } = route.params;
  console.log('name:', name);
  console.log('description:', description);

  const [prompts, setPrompts] = useState(initialPrompts);
  //const [responseText, setResponseText] = useState('');
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  useEffect(() => {
    // Fetch the initial API response when the component mounts
    fetchPickupLine();
  }, []);

  const fetchPickupLine = () => {
    // Prepare the data to be sent to the server
    const data = {
      userinput: name, description // Pass the userinput from the route params
    };


  // const handleSubmit = () => {
  //   // Prepare the data to be sent to the server
  //   const data = {
  //     userinput: name, description // Pass the userinput from the state
  //   };

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
  };


  const handleCardRemoved = () => {
    // Update the currentPromptIndex and fetch new response when a card is removed (swiped)
    setCurrentPromptIndex(prevIndex => prevIndex + 1);
    fetchPickupLine();
  };

  return (
    <SafeAreaView style={PromptStyles.promptContainer}>
        {/* <TextInput
          style={styles.input}
          placeholder="User Input"
          value={userinput}
          onChangeText={text => setuserinput(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      <Text style={styles.responseText}>
      </Text> */}
      <SwipeCards
        cards={prompts}
        loop={false}
        renderCard={(prompt) => (
          <PromptCardComponent
            key={prompt.id}
            title={name}
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
        <ButtonComponent text='copy' />
       <Text>                        </Text> 
        <ButtonComponent text='share' />
      </View> 

    </SafeAreaView>
  );
};

export default DummyPromptScreen;