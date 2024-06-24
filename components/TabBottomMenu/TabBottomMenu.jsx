import { View, TouchableOpacity, Text } from 'react-native';

import style from './TabBottomMenu.style';

const TabBottomMenu = ({ selectedTabName, onPress, todoList }) => {
  const acc = todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    {
      all: todoList.length,
      inProgress: 0,
      done: 0,
    }
  );
  function getTextStyle(tabName) {
    return {
      fontWeight: 'bold',
      color: selectedTabName === tabName ? '#2F76E5' : 'black',
    };
  }
  return (
    <View style={style.root}>
      <TouchableOpacity onPress={onPress.bind(this, 'All')}>
        <Text style={getTextStyle('All')}>All({acc.all})</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress.bind(this, 'In Progress')}>
        <Text style={getTextStyle('In Progress')}>
          In Progress ({acc.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress('Done')}>
        <Text style={getTextStyle('Done')}>Done ({acc.done})</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBottomMenu;
