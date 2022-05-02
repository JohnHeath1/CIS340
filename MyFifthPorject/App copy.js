import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View style={{flex}}>
    <View style = {{flex: 1, height: 50, backgroundColor: 'red'}}/>
    <View style = {{flex: 1, height: 100, backgroundColor: 'yellow'}}/>
    <View style = {{flex: 1, height: 100, backgroundColor: 'blue'}}/>
  </View>


    );
  }
