import {View, Text,StyleSheet} from 'react-native';
export default function App(){
  return(
    <View>
      <Text style={styles.name}>Hello World</Text>
    </View>
  )
}
const styles=StyleSheet.create({
  name:{
    margin: 7
  }
})
