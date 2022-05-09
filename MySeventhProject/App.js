import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component{
  
  onPressButton(){
    alert("You tapped a button")
  }
  render(){
  return (
    <View style={styles.container}>
      
    <View style={styles.containerButton}>
    <Button
    onPress={this._onPressButton}
    title="Press button 1"
    />
    </View>

    <View style={styles.containerLayoutButton}>

      <Button
          onPress={this._onPressButton}
          title="Press button 2"
      />


      <Button
          onPress={this._onPressButton}
          title="Great"
          color="green"
      />

      </View>



    <View style = {styles.containerButton}>

    <Button
    onPress={this._onPressButton}
    title="Tap me!"
    />
    </View>


  );



