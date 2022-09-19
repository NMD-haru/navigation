import { StyleSheet, Text, View, } from 'react-native';
import Buttton from '../components/nut';
import InputBox from '../components/maininput';
import Logo from '../components/homelogo';
import Signup from './Signup';
function Login() {
  return (
    <View style={styles.container}>
      <Logo/>
      <InputBox style={styles.wah} txtlabel="Account"/>
      <Text></Text>
      <InputBox style={styles.wah} txtlabel="Password"/>
      <Text></Text>
      <Button title="  Debut! "/>
      <Text>or</Text>
      <Buttton title="register?" lozation="Signup"/>
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