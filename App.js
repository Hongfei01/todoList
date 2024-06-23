import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import styles from './App.style';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

const list = [
  { id: 1, title: 'this is a test', isCompleted: true },
  { id: 2, title: 'this is a test', isCompleted: false },
  { id: 3, title: 'this is a test', isCompleted: false },
];
export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <Card todo={list[0]} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
