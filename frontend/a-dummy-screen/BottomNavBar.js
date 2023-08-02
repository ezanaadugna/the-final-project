import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you have Ionicons installed

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('dummy page map')}
    >
      <View style={styles.button}>
        <Icon name="map-outline" size={24} color="#333" />
        {/* <Text style={styles.buttonText}>Map</Text> */}
      </View>
      {/* Add more buttons for other navigation options */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: 'black',
    height: 80,
    width: '100%',
    borderTopWidth: 2,
    // borderTopColor: 'white',
    elevation: 10,
    borderRadius: 0,
    marginHorizontal: 20,
  },
  button: {
    height: '65%',
    width: '85%',
    flexDirection: 'row', // Align the icon and text horizontally
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  buttonText: {
    marginLeft: 8, // Add some space between the icon and text
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default BottomNavBar;
