import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DummyPromptScreen from './a-dummy-screen/dummyPromptScreen';
import DummyScrollScreen from './a-dummy-screen/dummyScrollScreen';
import DummyBuildingScreen from './a-dummy-screen/dummyBuildingScreen';
import DummyMapScreen from './a-dummy-screen/dummyMapScreen';
import BottomNavBar from './a-dummy-screen/dummyNavBar';
import PromptScreen from './screens/PromptScreen';
import ScrollScreen from './screens/ScrollScreen';
import BuildingScreen from './screens/BuildingScreen';
import SplashScreenComponent from './screens/SplashScreen';
import FrontButton from './screens/previous-pages/NavigationPage';
import YesScreen from './screens/YesScreen';
import MapScreen from './screens/MapScreen';
import TempNavScreen from './screens/TempNavScreen';

const Stack = createStackNavigator();
function App() {
  // useEffect(() => {
  //   // Hide the splash screen once the app component mounts
  //   SplashScreen.hide();
  // }, []);
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Temp Nav Screen">
        <Stack.Screen name="Temp Nav Screen" component={TempNavScreen} options={{headerShown: false,}} />
         <Stack.Screen name="dummy page building" component={DummyBuildingScreen} options={{headerShown: false,}} />
         <Stack.Screen name="dummy page scroll" component={DummyScrollScreen} options={{headerShown: false,}} />
          <Stack.Screen name="dummy page prompt" component={DummyPromptScreen} options={{headerShown: false,}} />
          <Stack.Screen name="dummy page map" component={DummyMapScreen} options={{headerShown: false,}} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="Prompt Screen" component={PromptScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
//<Stack.Screen name="ScrollScreen" component={ScrollScreen} />