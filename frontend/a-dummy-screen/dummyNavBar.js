import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NavBarButton from '../components/navBarComponents/buttons';
import MapStyles from '../components/styles/mapStyles';

const NavBar = () => {
  return (
    <View style={MapStyles.container}>
      <NavBarButton text='Map' />
      <NavBarButton text='Build' />
    </View>
  );
};

export default NavBar