import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavBarStyles from '../styles/navBarStyles';

const NavBarButton = ({ text }) => {
  return (
    <View style={NavBarStyles.container}>
      <TouchableOpacity style={NavBarStyles.button}>
        <Text style={NavBarStyles.buttonText}>{ text }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBarButton