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
const styles = StyleSheet.create({
  text: {
  },
});

const Custom = () => <Text style={styles.text}></Text>; // Custom "nope" component

const DummyPromptScreen = () => {
  const route = useRoute();
  const { name } = route.params;
  console.log('name:', name);

  const [prompts, setPrompts] = useState(initialPrompts);
  const [userinput, setuserinput] = useState('');
  const [responseText, setResponseText] = useState('');


  const handleSubmit = () => {
    // Prepare the data to be sent to the server
    const data = {
      userinput: userinput, // Pass the userinput from the state
    };

    axios.get('https://mapchat-55tf.onrender.com/chat', { params: data })
      .then(response => {
        console.log('Response from server:', response.data);
        setResponseText(JSON.stringify(response.data, null));
      })
      .catch(error => {
        console.error('Error:', error);
        setResponseText('Error: ' + error.message);
      });
  };


  const handleCardRemoved = () => {
    if (prompts.length > 0) {
      handleSubmit();
    }
    setPrompts((prevPrompts) => prevPrompts.slice(1));
  };

  return (
    <SafeAreaView style={PromptStyles.promptContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Input"
          value={userinput}
          onChangeText={text => setuserinput(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
            generatedPrompt={name}
          />
        )}
        renderNoMoreCards={() => (
          <GenerateComponent text='Generate More Prompts' />
        )}
        cardRemoved={handleCardRemoved}
        renderNope={() => <Custom />}
        renderYup={() => <Custom />}
      />

    </SafeAreaView>
  );
};

export default DummyPromptScreen;

/*

      <View style={PromptStyles.buttonContainer}>
        <ButtonComponent text='copy' />
       <Text>                        </Text> 
        <ButtonComponent text='share' />
      </View> 

<View>
<Text>Pickup Line for {name}</Text>
<Text>{pickupLine}</Text>
</View>
*/
