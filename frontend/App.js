import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { DummyPromptScreen } from './a-dummy-screen/dummyPromptScreen';
// import { DummyScrollScreen } from './a-dummy-screen/dummyScrollScreen';
import { DummyBuildingScreen } from './a-dummy-screen/dummyScrollScreen';

// import PromptScreen from './screens/PromptScreen';
// import ScrollScreen from './screens/ScrollScreen';
// import BuildingScreen from './screens/BuildingScreen';
// import SplashScreenComponent from './screens/SplashScreen';
// import FrontButton from './screens/previous-pages/NavigationPage';
// import YesScreen from './screens/YesScreen';
// import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
  // useEffect(() => {
  //   // Hide the splash screen once the app component mounts
  //   SplashScreen.hide();
  // }, []);
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="dummy page" component={DummyBuildingScreen} options={{headerShown: false,}} />
          {/* <Stack.Screen name="dummy page" component={DummyScrollScreen} options={{headerShown: false,}} /> */}
          {/* <Stack.Screen name="dummy page" component={DummyPromptScreen} options={{headerShown: false,}} /> */}
        </Stack.Navigator>
      </NavigationContainer>


      {/*<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={SplashScreenComponent} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Front" component={FrontButton} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>

       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="PromptScreen" component={PromptScreenScreen} />
            <Stack.Screen name="BuildingScreen" component={BuildingScreen} />
            <Stack.Screen name="ScrollScreen" component={ScrollScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
