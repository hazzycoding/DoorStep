import {
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../Constant/Color';

const Input = props => {
  const [text, setText] = useState('');

  const handleTextChange = newText => {
    setText(newText);
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={handleTextChange}
          value={text}
          placeholder={props.text}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Input;
const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 5,
    width: 300,
    height: 50,
    padding: 5,
    fontSize: 25,
    fontFamily: 'Fuzzy Bubbles Regular',
    color: Colors.darkBlack,
    borderWidth: 2,
    borderColor: Colors.darkBlack,
    borderRadius: 10,
  },
});
