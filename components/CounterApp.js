import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View className="container">
      <Text className="countText">Count: {count}</Text>
      <View className="buttonContainer">
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
};

export default CounterApp;
