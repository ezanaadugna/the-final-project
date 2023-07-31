import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const MapStyles = StyleSheet.create({
   
  safeViewContainer: {
    alignItems: 'center',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    width: '90%'
    
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },

// Map

  container: {
    height: '80%',
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },

  mapContainer: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

// Map


export default MapStyles