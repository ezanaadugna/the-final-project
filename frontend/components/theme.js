import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    // Example for changing font family:
    fontFamily: 'Arial', // Change this to your desired font family
    fontWeight: 'bold', // Change this to adjust font weight
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
    // Example for changing font family:
    fontFamily: 'Helvetica', // Change this to your desired font family
    // fontWeight: 'bold', // Uncomment and adjust this if needed
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 300,
    height: 350,
    alignItems: 'center',
    marginTop: 60,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Times New Roman', // Change this to your desired font family
    fontWeight: 'bold', // Change this for the font weight
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Courier New', // Change this to your desired font family
    // fontWeight: 'bold', // Uncomment and adjust this if needed
  },
});

export default commonStyles;
