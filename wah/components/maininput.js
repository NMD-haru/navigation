import React from 'react';
import { StyleSheet,TextInput } from 'react-native';

export default function InputBox({txtlabel}) {
const [text, onChangeText] = React.useState("");
  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={txtlabel}
        value={text}
    />
  );
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        paddingLeft: 5,
      },
});