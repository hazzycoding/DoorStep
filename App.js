import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.txt}>App</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  txt: {
    color: 'black',
    fontFamily: 'Fuzzy Bubbles Regular',
    fontSize: 60,
  },
});
