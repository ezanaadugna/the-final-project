import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChatInput from '../components/chatinput';

const PromptScreen = ({ navigation }) => {
  const handleYes = () => {
    navigation.navigate('YesScreen');
  };

  const handleNo = () => {
    navigation.navigate('NoScreen');
  };

  return (
    <View style={styles.container}>
      <ChatInput></ChatInput>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default PromptScreen;
