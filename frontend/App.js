import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DummyPromptScreen from './a-dummy-screen/dummyPromptScreen';
import DummyScrollScreen from './a-dummy-screen/dummyScrollScreen';
import DummyMapScreen from './a-dummy-screen/dummyMapScreen';
import SplashScreenComponent from './screens/SplashScreen';
import BottomNavBar from './a-dummy-screen/BottomNavBar';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
function App() {
  // useEffect(() => {
  //   // Hide the splash screen once the app component mounts
  //   SplashScreen.hide();
  // }, []);
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splashscreen">
          <Stack.Screen name="splashscreen" component={SplashScreenComponent} options={{headerShown: false,}}/>
          <Stack.Screen name="dummy page map" component={DummyMapScreen} options={{headerShown: false,}} />
          <Stack.Screen name="dummy page scroll" component={DummyScrollScreen} options={{headerShown: false,}} />
          <Stack.Screen name="dummy page prompt" component={DummyPromptScreen} options={{headerShown: false,}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;

