import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const BuildingStyles = StyleSheet.create({

  buildingContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  headerBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },

  headerText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Helvetica',
    // fontWeight: 'bold', 
  },

  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 300,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    resizeMode: 'cover',
  },

  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // You can adjust the image's resizeMode as needed
    borderRadius: 30,
    overflow: 'hidden',
  },

  imageWrapper: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    overflow: 'hidden', // Clip the image inside the wrapper
  },

  descriptionContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 300,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  descriptionText: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'Helvetica',
    // fontWeight: 'bold', 
  },

  buttonGenerate: {
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 200,
    height: 70,
    alignItems: 'center',
    marginTop: 40,
    // marginRight: 170,
  },

  buttonContent: {
    fontSize: 17,
    color: 'black',
    fontFamily: 'Helvetica',
    // fontWeight: 'bold', 
  }



})

export default BuildingStyles