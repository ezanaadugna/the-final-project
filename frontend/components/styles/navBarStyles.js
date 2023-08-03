import { StyleSheet } from 'react-native';

// ctrl + f the style you wish to change, much faster that way

const NavBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default NavBarStyles;