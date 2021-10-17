import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Fab title="-1" onPress={decrement} positionLeftOrRight="left" />
      <Fab title="+1" onPress={increment} positionLeftOrRight="right" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginTop: 60,
    fontSize: 25,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1.0)',
  },
  fabLocationBottom: {
    position: 'absolute',
    bottom: 15,
    right: 10,
  },
});
