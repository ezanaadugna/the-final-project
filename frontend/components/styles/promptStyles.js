import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const PromptStyles = StyleSheet.create({

  promptContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },

  buttonCopy: {
    backgroundColor: '#fff',
    borderRadius: 15,
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
    marginLeft: 40,
    marginRight: 40,
  },

  buttonContent: {
    fontSize: 20,
    color: '#555',
    fontFamily: 'Courier New',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -50,
    marginBottom: 50,
    // backgroundColor: 'white',
    height: 60,
  },

  promptCard: {
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#bbf9ff',
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
    width: '80%',
    height: '85%',
    alignItems: 'center',
    marginTop: 10,
  },

  promptCardTitle: {
    flex: 0.45,
    fontSize: 18,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
  promptCardContent: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Courier New',
    display: 'flex', // Use flexbox for vertical centering
  },

  generateButton: {
    backgroundColor: '#fff',
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
    width: '95%',
    height: 50,
    alignItems: 'center',
  },

  swipeCard: {
    // width: '10%'
  },

  inputBox: {
    padding: 10,
    backgroundColor: '#fff',
    width: '60%',
    borderRadius: 15,
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },

  submitButton: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '19%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },

  inputRow: {
    flexDirection: 'row',
    // justifyContent: 'space-around',

  }

})

export default PromptStyles