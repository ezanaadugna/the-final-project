import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const MapStyles = StyleSheet.create({
   
  safeViewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4B0082'
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
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
    marginTop: 0,
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
    // overflow: 'hidden',
    marginTop: 20,
  },

  buildBox: {
    height: '85%',
    width: '100%',
    backgroundColor: '#6d36c7',
    borderRadius: 10,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    // overflow: 'hidden',
  },

  boxText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Helvetica',
  },

  seeMoreButton: {
      backgroundColor: '#3CACAE',
      borderRadius: 20,
      padding: 14,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      width: '60%',
      height: '8%',
      alignItems: 'center',
      marginTop: 25,
      justifyContent: 'center',
      // marginRight: 170,
  },

  buttonText: {
    color: 'white'
  }
})


export default MapStyles