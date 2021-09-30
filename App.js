import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List } from './src/components/List';
import { Main } from './src/components/Main';
import { Navbar } from './src/components/Navbar';
import { Search } from './src/components/Search';

export default function App() {
  const [page, setPage] = useState(1)
  const [text, setText] = useState('url')

  const changePage = (num) => {
    setPage(num);
  }

  const fetchUrl = async () => {
    const response = await fetch(
      'https://fortavey.ru/request.php',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
    );
    const data = await response.json();
    setText(data.url)
  }

  const loadUrl = useCallback(async () => await fetchUrl(), [fetchUrl]);

  useEffect(() => {
    loadUrl();
  }, [])

  let content = (
    <Main/>
  )
  switch(page) {
    case 1:
      content = (<Main changePage={changePage} title={text}/>); break;
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
