import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

const MapScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    })

  return (
    <SafeAreaView>
      <Text style={{ color: 'red' }}>
        
        {/* Header */}
        <View>
          <Text>Header</Text>
          <Image 
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dmap%2BMarker&psig=AOvVaw222lEC-uESSCgu07vMWOGy&ust=1690567164249000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiNkcy7r4ADFQAAAAAdAAAAABAH"
            className='h=87 w-7 bg-gray-300'
          />
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default MapScreen;
