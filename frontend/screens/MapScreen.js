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
  useEffect(() => {
    // Request location permission if not granted
    const requestLocationPermission = async () => {
      try {
        const { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied.');
          return;
        }

        // Get the current location
        const location = await getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
      } catch (err) {
        console.warn('Error requesting location permission:', err);
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    // Function to fetch nearby buildings
    const fetchNearbyBuildings = async (latitude, longitude) => {
      try {
        // console.log(longitude);
        // console.log(latitude);
        const response = await axios.get(`http://192.168.0.14:3000/buildings?latitude=${latitude}&longitude=${longitude}`);
        setNearbyBuildings(response.data.slice(0, 3)); // Show only the first 3 buildings
        
      } catch (error) {
        console.log(error.response);
      }
    };

    // Fetch nearby buildings when currentLocation is set
    if (currentLocation) {
      fetchNearbyBuildings(currentLocation.latitude, currentLocation.longitude);
    }
  }, [currentLocation]);

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
