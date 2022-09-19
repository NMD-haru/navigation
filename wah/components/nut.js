import { StyleSheet, Text, Pressable } from 'react-native';
export default function Buttton({title},{lozation}) {
  return (
    <Pressable style={styles.nutt} onPress={() => navigation.navigate({lozation})}>
      
      <Text textDecorationColor="white">{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  nutt: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
});