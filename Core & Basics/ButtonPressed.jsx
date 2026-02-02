import {View, Text, Button} from 'react-native';
export default function App(){
  const pressed=()=>{
    alert("Hello");
  }
  return(
    <View>
      <Button onPress={pressed} title="Press" />
    </View>
  )
}
