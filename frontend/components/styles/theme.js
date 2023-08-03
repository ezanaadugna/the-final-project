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
    backgroundColor: 'f0f0f0',
  },

  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Helvetica',
    // fontWeight: 'bold', 
  },

});

export default commonStyles;
