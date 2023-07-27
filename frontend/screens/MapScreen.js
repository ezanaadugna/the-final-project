import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

const MapScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text style={{ color: 'red' }}>MapScreen</Text>
    </View>
  )
}

export default MapScreen;
