import { StyleSheet } from 'react-native';

const MapStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5EFF5', 
    paddingVertical: 0,
  },
  searchContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 5,
  },
  input: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F2F5F8', 
  },
  container: {
    height: '73%',
    width: '90%',
    backgroundColor: '#E5EFF5', 
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
    borderColor: '#F77F00', 
    borderWidth: 2,

  },
  mapContainer: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
  },
  buildView: {
    height: '15%',
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, 
    shadowRadius: 6,
    elevation: 5,
  },
  buildBox: {
    flex: 1,
    backgroundColor: '#F77F00', 
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
      width: '65%',
      height: '8%',
      alignItems: 'center',
      marginTop: 25,
      justifyContent: 'center',
      // marginRight: 170,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MapStyles;
