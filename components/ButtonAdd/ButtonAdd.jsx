import { TouchableOpacity, Text } from 'react-native';

import { style } from './ButtonAdd.style';
const ButtonAdd = ({ onPress }) => {
  return (
    <TouchableOpacity style={style.root} onPress={onPress}>
      <Text style={style.txt}>+ New todo</Text>
    </TouchableOpacity>
  );
};

export default ButtonAdd;
