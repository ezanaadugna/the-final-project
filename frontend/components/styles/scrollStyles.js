import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const ScrollStyles = StyleSheet.create({

  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#E3E8E9'
  },

  typeContainer: {
    flexDirection: 'row', 
    marginBottom: 10,
    alignItems: 'center',
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
    // flex: 0,
    // justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },

  buildingCard: {
    backgroundColor: 'transparent',
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '95%',
    height: 150,
    alignItems: 'center',
    marginTop: 20,
    overflow: 'hidden', 
    // borderColor: 'black',
    // borderWidth: 2,
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
    bottom: 0, // Position the name at the bottom of the box
    left: 0, // Position the name at the left of the box
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: '100%',
    justifyContent: 'center'
  },

  buildingCardTitle: {
    fontSize: 20,
    color: '#fff',

  },
  /* buildingCardTitleContainer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
*/

  buildingCardContent: {
    fontSize: 50,
    color: '#555',
    fontFamily: 'Courier New',
    display: 'flex', // Use flexbox for vertical centering
  },
})

export default ScrollStyles