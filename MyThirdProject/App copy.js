import { React } from 'react';
import { Text, TextInput, View } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

function Student() {
  return (
    <View> 
      <Text>Hey, My name is {clickProps.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp(){
  <View style={{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }}
  >
    <Text> Welcome to CIS340</Text>
    <Student name="John Heath"/>
    <Student name="Alice ####"/>
    <Student name="Bob ####"/>
    <Student name="Jon Clark"/>
  </View>
}
