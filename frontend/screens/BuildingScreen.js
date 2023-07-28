import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BuildingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>That's why you're single.</Text>
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
  text: {
    fontSize: 24,
  },
});

export default BuildingScreen;
