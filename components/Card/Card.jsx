import { TouchableOpacity, Text, Image } from 'react-native';

import check from '../../assets/check.png';

import style from './style';
const Card = ({ todo, onPress }) => {
  return (
    <TouchableOpacity style={style.card} onPress={() => onPress(todo)}>
      <Text
        style={[
          style.title,
          todo.isCompleted && { textDecorationLine: 'line-through' },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={style.img} source={check} />}
    </TouchableOpacity>
  );
};

export default Card;
