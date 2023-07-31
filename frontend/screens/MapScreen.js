import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const logoImage = require('../assets/logo.png'); // Replace with the actual path to your logo image

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nearbyBuildings, setNearbyBuildings] = useState([]);
  const navigation = useNavigation();

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
        console.log('Fetching nearby buildings...');
        // console.log(latitude);
        const response = await axios.get('http://192.168.0.124:3000/buildings?latitude=${latitude}&longitude=${longitude}');
        console.log('Response from API:', response.data);

        setNearbyBuildings(response.data);
      } catch (error) {
      }
    };
    // Fetch nearby buildings when currentLocation is set
    if (currentLocation) {
      console.log('Current Location:', currentLocation);
      fetchNearbyBuildings(currentLocation.latitude, currentLocation.longitude);
    }
  }, [currentLocation]);

    const handleBuildingPress = (building) => {
      navigation.navigate('BuildingScreen', { building });
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
        {currentLocation && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {/* Marker for the current location */}
            <Marker coordinate={currentLocation} title="You are here" pinColor="blue" />

            {/* Markers for nearby buildings */}
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

      {/* List of nearby buildings */}
      <View style={styles.buildingListContainer}>
        <Text style={styles.listHeader}>Nearby Buildings</Text>
        <FlatList
          data={nearbyBuildings}
          keyExtractor={(item) => item.placeId}
          renderItem={({ item }) => (
            <View style={styles.buildingListItem}>
              <Text style={styles.buildingName}>{item.name}</Text>
              <Text style={styles.buildingDescription}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

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
  buildingListContainer: {
    padding: 20,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buildingListItem: {
    marginBottom: 10,
  },
  buildingName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buildingDescription: {
    fontSize: 14,
  },
});

export default MapScreen;