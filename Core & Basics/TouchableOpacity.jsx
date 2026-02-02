import {View, Text, Button, TouchableOpacity} from 'react-native';
export default function App(){
  const pressed=()=>{
    alert("Hello");
  }
  return(
    <View>
    <TouchableOpacity onPress={pressed}>
      <Text>Press Me</Text>
    </TouchableOpacity>
    </View>
  )
}
