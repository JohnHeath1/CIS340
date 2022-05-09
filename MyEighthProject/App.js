import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableObject } from 'react-native';
import * as ImagePicker from 'expo-image-picker' //import

export default function App() {

  const [selectedImage, setSelectedImage ] = React.useState(null)

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){

      alert("Permission is required");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
   
      setSelectedImage({ localUri: pickerResult.uri});

  };

  let openSharingDialofAsync = async () => {
    if( ! (await openSharingDialofAsync.isAvailableAsync())){
      alert('Sharing is not available on my phone');
    }
  }
  if (selectedImage !== null){
    return(
      <View style = {styles.container}>
        <Image source = {{ uri: selectedImage.localUri}} style = {style.selImage}/>
      </View>
    }
  }

    <View style={styles.container}>
      <View style={styles.container}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#FFFFE0",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#778899",
    padding: 10
  },
});
