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
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Helvetica',
    // fontWeight: 'bold', 
  },
  card: {
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
  cardTitle: {
    flex: 0.45,
    fontSize: 18,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardContent: {
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
    // marginTop: 40,
    marginRight: 170,
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
    // marginTop: 40,
    marginLeft: 170,
  },

  buttonContent: {
    fontSize: 20,
    color: '#555',
    fontFamily: 'Courier New',
  },

  buttonContainer: {
    flexDirection: 'row', // This will make the children align horizontally
    // justifyContent: 'center', // You can adjust the spacing as you like
    paddingHorizontal: 0, // Add padding for better spacing
    marginBottom: 10, // Optional: Add some margin if needed
    // Other styles...
  },

});

export default commonStyles;
