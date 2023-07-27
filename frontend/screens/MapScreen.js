import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const logoImage = require('../assets/logo.png'); // Replace with the actual path to your logo image

export default function MapScreen() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nearbyMonuments, setNearbyMonuments] = useState([]);

  useEffect(() => {
    // Request location permission if not granted
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Get the current location
          Geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setCurrentLocation({ latitude, longitude });
              fetchNearbyMonuments(latitude, longitude);
            },
            (error) => {
              console.error('Error getting current location:', error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn('Error requesting location permission:', err);
      }
    };

    requestLocationPermission();
  }, []);

  // Function to fetch nearby monuments
  const fetchNearbyMonuments = async (latitude, longitude) => {
    const searchRadius = 1000; // Set the search radius in meters
    const searchTypes = 'tourist_attraction'; // Set the type of places to search for (e.g., 'tourist_attraction', 'museum', 'historical_site', etc.)

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${searchRadius}&type=${searchTypes}&key=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setNearbyMonuments(data.results);
      } else {
        setNearbyMonuments([]);
      }
    } catch (error) {
      console.error('Error fetching nearby monuments:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo */}
        <Image source={logoImage} style={styles.logo} />

        {/* Welcome Text */}
        <Text style={styles.headerText}>Welcome to MapChat!</Text>
      </View>

      {/* Map */}
      <View style={styles.mapContainer}>
        <MapView style={styles.map}>
          {/* Marker for the current location */}
          {currentLocation && (
            <Marker coordinate={currentLocation} title="You are here" pinColor="blue" />
          )}

          {/* Markers for nearby monuments */}
          {nearbyMonuments.map((monument, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: monument.geometry.location.lat,
                longitude: monument.geometry.location.lng,
              }}
              title={monument.name}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
    // Add any other styling for the logo as needed
  },
  headerText: {
    fontSize: 20,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
