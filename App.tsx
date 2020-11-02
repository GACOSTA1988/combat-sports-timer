import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from './components/Timer'

export default function App() {
  const oneRound = 300

  return (
    <View style={styles.container}><Timer time={oneRound} /></View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
    marginVertical: 25,
  },
});