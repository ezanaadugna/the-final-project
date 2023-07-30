import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const commonStyles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 20,
    color: 'black',
    marginTop: 0,
    fontFamily: 'Arial', 
    fontWeight: 'bold', 
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Helvetica',
    // fontWeight: 'bold', 
  },
  promptCard: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 350,
    height: 400,
    alignItems: 'center',
    marginTop: 60,
  },
  promptCardTitle: {
    flex: 0.45,
    fontSize: 18,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  promptCardContent: {
    fontSize: 25,
    color: '#555',
    fontFamily: 'Courier New',
    display: 'flex', // Use flexbox for vertical centering
  },
  buttonCopy: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 100,
    height: 50,
    alignItems: 'center',
    marginTop: 40,
    // marginRight: 170,
  },

  buttonShare: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 100,
    height: 50,
    alignItems: 'center',
    marginTop: 40,
    // marginLeft: 170,
  },

  buttonContent: {
    fontSize: 20,
    color: '#555',
    fontFamily: 'Courier New',
  },

  buttonContainer: {
    flexDirection: 'row', 
    marginBottom: 10,
  },

  typeContainer: {
    flexDirection: 'row', 
    marginBottom: 10,
    alignItems: 'flex-start',
  },

  typeBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    marginTop: 40,
  },

  typeBoxContent: {
    fontSize: 20,
    color: '#555',
    fontFamily: 'Courier New',
  },

  buildingCardTitle: {
    flex: 0.45,
    fontSize: 25,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#fff',
  },
  buildingCardContent: {
    fontSize: 50,
    color: '#555',
    fontFamily: 'Courier New',
    display: 'flex', // Use flexbox for vertical centering
  },

  buildingCard: {
    backgroundColor: 'transparent',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: 350,
    height: 170,
    alignItems: 'center',
    marginTop: 10,
    overflow: 'hidden', 
  },

  centeredContainer: {
    flex: 1,
    // justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },

  buildingCardContentImage: {
    width: '100%',
    height: '100%', // Adjust the height of the image as needed
    marginBottom: 10,
    resizeMode: 'cover', // You can adjust the image's resizeMode as needed
    borderRadius: 20, // Add borderRadius if needed
  },

  buildingCardTitleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },


});

export default commonStyles;
