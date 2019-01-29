import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './Constants';

/**
 * Global Styles for whole application.
 * */
export default StyleSheet.create({
  headerBar: {
    backgroundColor: '#2f5953'
  },
  titleHeader: {
    fontSize: 20,
    color: 'white',
    marginLeft: SCREEN_WIDTH * 0.02
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    marginLeft: 10,
    width: 30,
    height: 30
  },
  centerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texHeaderStyle: {
    color: '#2f5953',
    fontSize: 25,
    marginTop: SCREEN_HEIGHT * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02
  },
  viewRegularInput: {
    flex: 1,
    borderColor: '#fff',
    marginBottom: 20
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10
  }
});
