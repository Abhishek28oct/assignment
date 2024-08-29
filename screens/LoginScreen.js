import React from 'react';
import { View, TextInput, Button } from 'react-native';
import './LoginScreen.css';

const LoginScreen = () => {
  return (
    <View className="container">
      <TextInput className="input" placeholder="Username" />
      <TextInput
        className="input"
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={() => {}} />
    </View>
  );
};

export default LoginScreen;
