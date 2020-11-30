import React from 'react';
import { View, StyleSheet } from 'react-native';
import Timer from './components/Timer'
import { Container, Header, Content, Button, Text } from 'native-base';
export default function App() {
  const oneRound = 300

  return (
    <View style={styles.container}>
      <Timer time={oneRound} />
      <View style={{ display: "flex", flexDirection: "row", marginVertical: "5%" }}>
        <Button style={{ marginRight: "2%" }} success>
          <Text>start!</Text>
        </Button>
        <Button style={{ marginLeft: "2%" }}>
          <Text>stop!</Text>
        </Button>
      </View>
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