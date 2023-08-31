import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../Constant/Color';

const PasswordInput = props => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.rootContainer}>
      <TextInput
        style={styles.input}
        secureTextEntry={true} // This prop makes the input display dots
        value={password}
        onChangeText={setPassword}
        placeholder={props.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 5,
    fontSize: 25,
    fontFamily: 'Fuzzy Bubbles Regular',
    color: Colors.darkBlack,
    borderWidth: 2,
    borderColor: Colors.darkBlack,
    borderRadius: 10,
    margin: 10,
    width: 300,
    height: 50,
  },
});

export default PasswordInput;
