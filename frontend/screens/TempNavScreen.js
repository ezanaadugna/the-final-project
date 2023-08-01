import * as React from 'react';
import { Button, View, Text } from 'react-native';
function TempNavScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here is your home screen</Text>
      <Button
        title="dummy page building"
        onPress={() => navigation.navigate("dummy page building")}
      />
        <Button
        title="dummy page scroll"
        onPress={() => navigation.navigate("dummy page scroll")}
      />
        <Button
        title="dummy page prompt"
        onPress={() => navigation.navigate("dummy page prompt")}
      />
        <Button
        title="dummy page map"
        onPress={() => navigation.navigate("dummy page map")}
      />
       {/* <Button
        title="MapScreen"
        onPress={() => navigation.navigate("MapScreen")}
      />
        <Button
        title="Prompt"
        onPress={() => navigation.navigate("Prompt Screen")}
      /> */}
    </View>
  );
}
export default TempNavScreen;