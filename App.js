import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from './src/components/List';
import { Main } from './src/components/Main';
import { Navbar } from './src/components/Navbar';
import { Search } from './src/components/Search';

export default function App() {
  const [page, setPage] = useState(3)

  const changePage = (num) => {
    setPage(num);
  }

  let content = (
    <Main/>
  )
  switch(page) {
    case 1:
      content = (<Main changePage={changePage}/>); break;
    case 2:
      content = (<Search changePage={changePage}/>); break;
    case 3:
      content = (<List />); break;
    default:
      content = (<Main changePage={changePage}/>); break;
  }

  return (
    <View style={styles.container}>
      <Navbar page={page} changePage={changePage}/>
      { content }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#276ad6'
  },
});
