import React from 'react';
import { View, Text } from 'react-native';
import './ItemDetailScreen.css';

const ItemDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View className="container">
      <Text className="itemText">Detail of {item}</Text>
    </View>
  );
};

export default ItemDetailScreen;
