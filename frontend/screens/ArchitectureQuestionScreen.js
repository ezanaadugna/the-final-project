import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ArchitectureQuestionScreen = ({ navigation }) => {
  const handleYes = () => {
    navigation.navigate('YesScreen');
  };

  const handleNo = () => {
    navigation.navigate('NoScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Do you like Fine Architecture?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={handleYes} />
        <Button title="No" onPress={handleNo} />
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

export default ArchitectureQuestionScreen;
