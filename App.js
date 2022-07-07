import React, { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   console.log("useEffect", name)
  // }, [name])

  useEffect(() => {
    console.log('useEffect count', count)
    const myCount = setInterval(() => {
      setCount(count)
    }, 1000)
    return () => {
      clearInterval(myCount)
      console.log('clearIntercal')
    }
  }, [count])

  // const changeName = () => {
  //   console.log("在 changeName function 內", name)
  //   setName('Nick')
  //   console.log("在 changeName function 內，setName 之後", name)
  // }


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{console.log("render 裡面", count)}</Text>
      <Text>{count}</Text>
      {/* <Button
        title={"change name"}
        onPress={() => changeName()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
