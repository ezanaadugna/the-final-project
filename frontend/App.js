import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import ArchitectureQuestionScreen from './screens/ArchitectureQuestionScreen';
import NoScreen from './screens/NoScreen';
import YesScreen from './screens/YesScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ArchitectureQuestion" component={ArchitectureQuestionScreen} />
            <Stack.Screen name="YesScreen" component={YesScreen} />
            <Stack.Screen name="NoScreen" component={NoScreen} />
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
