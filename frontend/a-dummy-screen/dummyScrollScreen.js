import React from 'react';
import { Text, View, Image } from 'react-native';
import commonStyles from '../components/styles/theme';
import ScrollStyles from '../components/styles/scrollStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import TypeBoxComponent from '../components/scrollComponents/typeBox'; 
import BuildingCardComponent from '../components/scrollComponents/buildingCards'; 


const DummyScrollScreen = () => {
const { nearbyBuildings } = route.params;

  return (
    <SafeAreaView style={ScrollStyles.container}>
      <Text style={commonStyles.header}>Dummy Scroll Screen</Text>
      {/*} need to add syling for {*/}
        <View style={ScrollStyles.typeContainer}>
          <TypeBoxComponent text="Tower" />
          <TypeBoxComponent text="Museum" />
          <TypeBoxComponent text="Monument" />
          <TypeBoxComponent text="Gallery" />
        </View>

      <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
      <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
      <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
      <BuildingCardComponent imageURL='https://a.cdn-hotels.com/gdcs/production107/d1826/87b0e3b5-01da-4be3-8b0c-2d763513cd56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium'/>
      
    </SafeAreaView>
    
  );
};

export default DummyScrollScreen


// /Users/ezana/github/the-final-project/frontend/assets/theShard.jpg
// /Users/ezana/github/the-final-project/frontend/a-dummy-screen/dummyScrollScreen.js