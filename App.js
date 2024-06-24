import { ScrollView, View, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Dialog from 'react-native-dialog';
import uuid from 'react-native-uuid';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import TabBottomMenu from './components/TabBottomMenu/TabBottomMenu';

import styles from './App.style';
import ButtonAdd from './components/ButtonAdd/ButtonAdd';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedTabName, setSelectedTabName] = useState('All');
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [inputVal, setInputVal] = useState('');
  function updateTodo(todo) {
    const updateTodoList = [...todoList];
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updateIndex = updateTodoList.findIndex((t) => t.id === todo.id);
    updateTodoList[updateIndex] = updatedTodo;
    setTodoList(updateTodoList);
  }

  function handleSelectedName(tabName) {
    setSelectedTabName(tabName);
  }

  function deleteTodo(todo) {
    const updatedTodoList = todoList.filter((item) => item.id !== todo.id);
    setTodoList(updatedTodoList);
  }

  function handleLongPress(todo) {
    Alert.alert('Delete todo', 'Are you sure', [
      { text: 'Delete', style: 'destructive', onPress: () => deleteTodo(todo) },
      { text: 'Cancel', style: 'cancel' },
    ]);
  }

  function addTodo() {
    const newTodo = {
      id: uuid.v4(),
      title: inputVal,
      isCompleted: false,
    };
    setTodoList([newTodo, ...todoList]);
    setIsShowDialog(false);
    setInputVal('');
  }

  function getSelectedList() {
    switch (selectedTabName) {
      case 'All':
        return todoList;
      case 'In Progress':
        return todoList.filter((todo) => todo.isCompleted == false);
      case 'Done':
        return todoList.filter((todo) => todo.isCompleted === true);
      default:
        return [];
    }
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <ScrollView>
              {getSelectedList().map((item) => (
                <View key={item.id} style={styles.cardItem}>
                  <Card
                    todo={item}
                    onPress={updateTodo}
                    onLongPress={handleLongPress}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <View>
            <ButtonAdd onPress={() => setIsShowDialog(true)} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <TabBottomMenu
          selectedTabName={selectedTabName}
          onPress={handleSelectedName}
          todoList={todoList}
        />
      </View>
      <View>
        <Dialog.Container
          visible={isShowDialog}
          onBackdropPress={() => setIsShowDialog(false)}
        >
          <Dialog.Title>Add todo</Dialog.Title>
          <Dialog.Description>Choose a name for your todo</Dialog.Description>
          <Dialog.Input
            value={inputVal}
            placeholder='Ex: go to the dentist'
            onChangeText={setInputVal}
          />
          <Dialog.Button
            label='Cancel'
            color={'gray'}
            onPress={() => setIsShowDialog(false)}
          />
          <Dialog.Button
            label='Save'
            onPress={() => addTodo()}
            disabled={inputVal.length === 0}
          />
        </Dialog.Container>
      </View>
    </>
  );
}
