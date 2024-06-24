import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  console.log('save');
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@todoList', jsonValue);
  } catch (e) {
    console.log(e.message);
  }
};

export const getData = async () => {
  console.log('load');
  try {
    const jsonValue = await AsyncStorage.getItem('@todoList');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e.message);
  }
};
