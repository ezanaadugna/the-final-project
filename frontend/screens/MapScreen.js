import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';

const logoImage = require('../assets/logo.png'); // Replace with the actual path to your logo image

const londonCoordinates = {
  latitude: 51.5074,
  longitude: -0.1278,
};

const londonRegion = {
  latitude: londonCoordinates.latitude,
  longitude: londonCoordinates.longitude,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function MapScreen() {
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
        <MapView style={styles.map} initialRegion={londonRegion}>
          {/* Marker for London */}
          <Marker coordinate={londonCoordinates} title="London" />
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
    height: 350,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
