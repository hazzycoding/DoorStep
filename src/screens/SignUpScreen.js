import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import Header from '../components/Header';
import {Colors} from '../Constant/Color';
import Button from '../components/Button';

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header>SignUp</Header>
      <View>
        <Input text="User name" />
        <PasswordInput text="Password" />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Submit"
          style={styles.btnStyle}
          txtStyle={styles.btnTxt}
          function={() => navigation.navigate('HomePage')}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.txt}>If you Already Have an account Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  innerview: {
    padding: 5,
  },
  btnContainer: {
    padding: 10,
  },
  btnStyle: {
    backgroundColor: Colors.darkPrimary,
    padding: 10,
    borderRadius: 10,
  },
  btnTxt: {
    color: Colors.darkWhite,
    fontSize: 15,
  },
  txt: {
    color: Colors.darkPrimary,
    fontSize: 15,
    fontFamily: 'Fuzzy Bubbles Regular',
  },
});
