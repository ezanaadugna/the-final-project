import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FrontButton = ({ navigation }) => {
  const PromptScreen = () => {
    navigation.navigate('../PromptScreen');
  };

  const ScrollScreen = () => {
    navigation.navigate('../ScrollScreen');
  };

  const BuildingScreen = () => {
    navigation.navigate('../BuildingScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Prompt" onPress={PromptScreen} />
        <Button title="Scroll" onPress={ScrollScreen} />
        <Button title="Building" onPress={BuildingScreen} />
      </View>
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

export default FrontButton;
