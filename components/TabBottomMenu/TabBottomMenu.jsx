import { View, TouchableOpacity, Text } from 'react-native';

import style from './TabBottomMenu.style';

const TabBottomMenu = ({ selectedTabName, onPress }) => {
  function getTextStyle(tabName) {
    return {
      fontWeight: 'bold',
      color: selectedTabName === tabName ? '#2F76E5' : 'black',
    };
  }
  return (
    <View style={style.root}>
      <TouchableOpacity onPress={onPress.bind(this, 'All')}>
        <Text style={getTextStyle('All')}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress.bind(this, 'In Progress')}>
        <Text style={getTextStyle('In Progress')}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('Test')}>
        <Text style={getTextStyle('Test')}>All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBottomMenu;
