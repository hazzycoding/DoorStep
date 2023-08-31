import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <TouchableOpacity style={props.style} onPress={props.function}>
      <Text style={props.txtStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
