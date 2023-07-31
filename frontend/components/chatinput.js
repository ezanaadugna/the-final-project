import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ChatInput = () => {
  const [buildingName, setBuildingName] = useState('');
  const [buildingDescription, setBuildingDescription] = useState('');

  const handleSubmit = () => {
    const params = {
      name: buildingName,
      description: buildingDescription
    };

    axios.get('https://mapchat-55tf.onrender.com/chat', { params })
      .then(response => {
        console.log('Response from server:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Building Name"
          value={buildingName}
          onChangeText={text => setBuildingName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Building Description"
          value={buildingDescription}
          onChangeText={text => setBuildingDescription(text)}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
});

export default ChatInput;