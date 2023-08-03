import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Rowdies_300Light } from '@expo-google-fonts/rowdies';

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
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Rowdies_300Light',
    color: '#3CACAE',

    // You can adjust the title text styles based on your design
  },
});

export default TitleHeader;
