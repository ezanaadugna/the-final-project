import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>MAPCHAT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#E3E8E9', // Example background color, you can set it as per your design
    height: 60, // Set the height of the header bar
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1, // Optional: Add a border or change styles as per your design
    borderColor: '#ccc', // Optional: Border color
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',

    // You can adjust the title text styles based on your design
  },
});

export default TitleHeader;
