import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    height: 115,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
  },
  img: {
    height: 25,
    width: 25,
  },
  title: {
    fontSize: 25,
  },
});

export default style;
