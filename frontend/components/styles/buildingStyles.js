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
    width: '90%',
    height: '10%',
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
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    resizeMode: 'cover',
    overflow: 'hidden',
  },

  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // You can adjust the image's resizeMode as needed
  },

  imageWrapper: {
    width: '100%',
    height: '100%', // Clip the image inside the wrapper
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
    width: '90%',
    height: '20%',
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
    width: '50%',
    height: '10%',
    alignItems: 'center',
    marginTop: 25,
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