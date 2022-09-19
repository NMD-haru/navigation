import { StyleSheet, Text, View, } from 'react-native';
import Buttton from '../components/nut';
import InputBox from '../components/maininput';
import Logo from '../components/homelogo';
import Login from'./Login';
function Signup() {
  return (
    <View style={styles.container}>
      <Logo/>
      <InputBox style={styles.wah} txtlabel="Account"/>
      <Text></Text>
      <InputBox style={styles.wah} txtlabel="Password"/>
      <Text></Text>
      <InputBox style={styles.wah} txtlabel="confirm Password"/>
      <Text></Text>
      <Buttton title="  Debut! "/>
      <Buttton title="Go to Home" onPress={() => navigation.navigate('Login')} />
      <Buttton title="Go back" onPress={() => navigation.goBack()} />
    </View>
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