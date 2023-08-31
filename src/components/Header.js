import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../Constant/Color';

const Header = props => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.txt}>{props.children}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: Colors.darkBlack,
    fontSize: 30,
    fontFamily: 'Fuzzy Bubbles Regular',
  },
});
