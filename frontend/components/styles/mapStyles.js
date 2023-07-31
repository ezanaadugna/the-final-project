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
    height: '75%',
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 30,
  },

  mapContainer: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

// Building

  buildView: {
    height: '15%',
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
  },

  buildBox: {
    height: '90%',
    width: '100%',
    backgroundColor: '#6d36c7',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  boxText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Helvetica',
  }
})


export default MapStyles