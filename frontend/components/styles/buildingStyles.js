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



})

export default BuildingStyles