import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import BuildingScreen from './screens/BuildingScreen';
//import PromptScreen from './screens/PromptScreen';
// import ScrollScreen from './screens/ScrollScreen';
 


const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Map" component={MapScreen} /> 
          <Stack.Screen name="BuildingScreen" component={BuildingScreen} />
          {/*<Stack.Screen name="PromptScreen" component={PromptScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

//<Stack.Screen name="ScrollScreen" component={ScrollScreen} />
    
  

