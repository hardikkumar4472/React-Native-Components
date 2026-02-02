import {View, Text, TextInput,Image} from 'react-native';
import {useState} from 'react';
export default function App(){
  const [Text,setText]=useState('');
  return(
    <View>
      <TextInput placeholder="Enter your text" onChangeText={setText} value={Text}/>
      <TextInput placeholder="Password" secureTextEntry/>
      <Image
      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      style={{ width: 100, height: 100 }}
    />
    </View>
  )
}
