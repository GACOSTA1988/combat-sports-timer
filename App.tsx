import React from 'react';
import { Text, View } from 'react-native';
import Timer from './components/Timer'
// import Navigation from './navigation';

export default function App() {

  const oneRound = 300

  return (
    <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}><Timer time={oneRound} /></View>
  )
}
