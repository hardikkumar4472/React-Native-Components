import {View, Text, Button, TouchableOpacity, TextInput} from 'react-native';
import {useState} from 'react';
export default function App(){
  const [Text,setText]=useState('');
  return(
    <View>
      <TextInput placeholder="Enter your text" onChangeText={setText} value={Text}/>
      <TextInput placeholder="Password" secureTextEntry/>
    </View>
  )
}
