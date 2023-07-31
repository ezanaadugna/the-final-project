import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate some asynchronous task, e.g., fetching data or checking authentication
    const simulateAsyncTask = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000); // Replace 3000 with the time you want your splash screen to show (in milliseconds).
      });
    };

    // Navigate to the next screen after the splash screen time has passed
    simulateAsyncTask().then(() => {
      navigation.replace('MapScreen'); // Replace 'MainScreen' with the name of your main app screen.
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Add your splash screen image here */}
      <Image source={require('../assets/MC.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Replace with your desired background color
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
