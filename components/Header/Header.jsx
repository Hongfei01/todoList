import { View, Image, Text } from 'react-native';

import logo from '../../assets/logo.png';
import style from './style';
const Header = () => {
  return (
    <View>
      <Image source={logo} style={style.img} resizeMode='contain' />
      <Text style={style.subtitle}>You have something to do.</Text>
    </View>
  );
};

export default Header;
