
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import axios from 'axios';
import MapStyles from '../styles/mapStyles';

const MapComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nearbyBuildings, setNearbyBuildings] = useState([]);

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
        const response = await axios.get(`https://mapchat-krmk.onrender.com/buildings?latitude=${latitude}&longitude=${longitude}`);
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
    <View style={MapStyles.container}>
      {/* Map */}
      <View style={MapStyles.mapContainer}>
        {currentLocation && (
          <MapView
            style={MapStyles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            
            <Marker coordinate={currentLocation} title="You are here" pinColor="blue" />

           
            {nearbyBuildings.map((building, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: building.location.coordinates[1],
                  longitude: building.location.coordinates[0],
                }}
                title={building.name}
              />
            ))}
          </MapView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default MapComponent;
