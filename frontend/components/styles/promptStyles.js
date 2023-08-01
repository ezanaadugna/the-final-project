import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const PromptStyles = StyleSheet.create({

  promptContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
    // marginRight: 170,
  },

  buttonShare: {
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
    marginBottom: 60,
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
    width: '92%',
    height: '85%',
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
  }

})

export default PromptStyles