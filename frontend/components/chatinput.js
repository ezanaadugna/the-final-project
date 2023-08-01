import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import commonStyles from '../components/styles/theme';
import PromptStyles from '../components/styles/promptStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import PromptCardComponent from '../components/promptComponents/promptCard'; 
import ButtonComponent from '../components/promptComponents/button'; 

const ChatInput = () => {
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


  return (
      <View style={styles.container}>
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
        {responseText}
      </Text>
    </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  responseText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default ChatInput;

