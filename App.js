import { ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import styles from './App.style';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import TabBottomMenu from './components/TabBottomMenu/TabBottomMenu';

const list = [
  { id: 1, title: 'this is a test', isCompleted: true },
  { id: 2, title: 'this is a test', isCompleted: false },
  { id: 3, title: 'this is a test', isCompleted: false },
  { id: 4, title: 'this is a test', isCompleted: true },
  { id: 5, title: 'this is a test', isCompleted: false },
  { id: 6, title: 'this is a test', isCompleted: false },
  { id: 7, title: 'this is a test', isCompleted: true },
  { id: 8, title: 'this is a test', isCompleted: false },
  { id: 9, title: 'this is a test', isCompleted: false },
  { id: 10, title: 'this is a test', isCompleted: true },
  { id: 11, title: 'this is a test', isCompleted: false },
  { id: 12, title: 'this is a test', isCompleted: false },
  { id: 13, title: 'this is a test', isCompleted: true },
  { id: 14, title: 'this is a test', isCompleted: false },
  { id: 15, title: 'this is a test', isCompleted: false },
  { id: 16, title: 'this is a test', isCompleted: true },
  { id: 17, title: 'this is a test', isCompleted: false },
  { id: 18, title: 'this is a test', isCompleted: false },
];
export default function App() {
  const [todoList, setTodoList] = useState(list);
  const [selectedTabName, setSelectedTabName] = useState('All');
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
                  <Card todo={item} onPress={updateTodo} />
                </View>
              ))}
            </ScrollView>
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
    </>
  );
}
