import { StyleSheet, Text, View, Button } from 'react-native';
import InputBox from './components/maininput';
import Logo from './components/homelogo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Logo/>
      <InputBox style={styles.wah} txtlabel="Account"/>
      <Text></Text>
      <InputBox style={styles.wah} txtlabel="Password"/>
      <Text></Text>
      <Button title="  Debut! "/>
      <Text>or</Text>
      <Button title="fotgot?"onPress={() => navigation.navigate('Fogotpass')} />
      <Text>or</Text>
      <Button title="register?"onPress={() => navigation.navigate('Signup')} />
    </View>
  );
}
function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <Logo/>
      <InputBox style={styles.wah} txtlabel="Account"/>
      <Text></Text>
      <InputBox style={styles.wah} txtlabel="Password"/>
      <Text></Text>
      <InputBox style={styles.wah} txtlabel="confirm Password"/>
      <Text></Text>
      <Button title="  Debut! "/>
      <Text>or</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Login')} />
      <Text>or</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
  function Fogotpass({navigation}) {
    return (
      <View style={styles.container}>
        <Logo/>
        <InputBox style={styles.wah} txtlabel="Account"/>
        <Text></Text>
        <Button title="  sms! "/>
        <Text>or</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Login')} />
        <Text>or</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}
 function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Fogotpass" component={Fogotpass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  wah:{
  }
});
export default App;