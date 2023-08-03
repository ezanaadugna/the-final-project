import { LogBox } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DummyPromptScreen from './a-dummy-screen/dummyPromptScreen';
import DummyScrollScreen from './a-dummy-screen/dummyScrollScreen';
import DummyMapScreen from './a-dummy-screen/dummyMapScreen';
import SplashScreenComponent from './screens/SplashScreen';
// import BottomNavBar from './a-dummy-screen/BottomNavBar';
// import SplashScreen from 'react-native-splash-screen';
import PromptScreenManual from './a-dummy-screen/PromptScreenManual';

const Stack = createStackNavigator();
function App() {
  // useEffect(() => {
  //   // Hide the splash screen once the app component mounts
  //   SplashScreen.hide();
  // }, []);
  // LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`', "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property. This API will be removed in SDK 45.", 'Warning message 3',]);

  LogBox.ignoreAllLogs();
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splashscreen">
          <Stack.Screen name="splashscreen" component={SplashScreenComponent} options={{headerShown: false,}}/>
          <Stack.Screen name="dummy page map" component={DummyMapScreen} options={{headerShown: false,}} />
          <Stack.Screen name="dummy page scroll" component={DummyScrollScreen} options={{headerShown: false,}} />
          <Stack.Screen name="dummy page prompt" component={DummyPromptScreen} options={{headerShown: false,}} />
          <Stack.Screen name="prompt screen manual" component={PromptScreenManual} options={{headerShown: false,}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;

