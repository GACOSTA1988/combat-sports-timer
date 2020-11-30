import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from './components/Timer'
import { Container, Header, Content, Button, Text } from 'native-base';
export default function App() {
  const oneRound = 300

  return (
    <View style={styles.container}>
      <Timer time={oneRound} />
      <Button>
        <Text>start!</Text>
      </Button>
      <Button>
        <Text>stop!</Text>
      </Button>
    </View >
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
    marginVertical: "20%",
  },
});