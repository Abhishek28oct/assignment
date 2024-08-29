import React from 'react';
import { View, FlatList, Text } from 'react-native';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View className="itemContainer">
          <Text className="itemText">{item}</Text>
        </View>
      )}
    />
  );
};

export default ItemList;
