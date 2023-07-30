import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const ScrollStyles = StyleSheet.create({

  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
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

  centeredContainer: {
    flex: 1,
    // justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
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

  buildingCardContentImage: {
    width: '100%',
    height: '100%', // Adjust the height of the image as needed
    marginBottom: 10,
    resizeMode: 'cover', // You can adjust the image's resizeMode as needed
    borderRadius: 20, // Add borderRadius if needed
  },


  buildingCardTitle: {
    flex: 0.45,
    fontSize: 25,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#fff',
  },

  buildingCardTitleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
  },

  buildingCardContent: {
    fontSize: 50,
    color: '#555',
    fontFamily: 'Courier New',
    display: 'flex', // Use flexbox for vertical centering
  },

})

export default ScrollStyles