import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Header from '../components/Header';
import PasswordInput from '../components/PasswordInput';
import {Colors} from '../Constant/Color';
import Button from '../components/Button';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header>Login</Header>
      <View style={styles.innerview}>
        <Input text="User Name" />
        <PasswordInput text="Password" />
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Login"
          style={styles.btnStyle}
          txtStyle={styles.btnTxt}
          function={() => navigation.navigate('HomePage')}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.txt}>
          If you do not have an account sign up Now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
