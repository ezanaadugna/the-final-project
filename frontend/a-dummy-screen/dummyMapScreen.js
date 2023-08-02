import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import MapStyles from '../components/styles/mapStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
// import SearchComponent from '../components/mapComponents/searchBar'; 
import MapComponent from '../components/mapComponents/mapComponent';
// import BulidingComponent from '../components/mapComponents/buildingComponent';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavBar from './BottomNavBar';
import TitleHeader from '../components/styles/MapChatHeader';

const Stack = createStackNavigator();

const DummyMapScreen = () => {
  const navigation = useNavigation();
  const [nearbyBuildings, setNearbyBuildings] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied.');
          return;
        }

        const location = await getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
      } catch (err) {
        console.warn('Error requesting location permission:', err);
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    const fetchNearbyBuildings = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://mapchat-55tf.onrender.com/buildings?latitude=${latitude}&longitude=${longitude}`
        );
        const nearbyBuildingsWithDetails = response.data.map((building) => ({
          ...building,
          name: building.name, // Replace 'name' with the actual name property from the API response
          location: building.location, // Replace 'location' with the actual location property from the API response
        }));
        
        setNearbyBuildings(response.data);
        console.log('Response from API:', response.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    if (currentLocation) {
      fetchNearbyBuildings(currentLocation.latitude, currentLocation.longitude);
    }
  }, [currentLocation]);

  const handleSeeMore = () => {
    navigation.navigate('dummy page scroll', { nearbyBuildings: nearbyBuildings });
  };
  return (
    <SafeAreaView style={MapStyles.safeViewContainer}>
      <TitleHeader />
      <MapComponent />
      <TouchableOpacity onPress={handleSeeMore} style={MapStyles.seeMoreButton}>
          <Text style={MapStyles.buttonText}>Choose Building</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DummyMapScreen;
