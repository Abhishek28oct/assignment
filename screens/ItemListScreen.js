import React from 'react';
import { View, Button } from 'react-native';
import ItemList from '../components/ItemList';
import './ItemListScreen.css';

const ItemListScreen = ({ navigation }) => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View className="container">
      <ItemList items={items} />
      {items.map((item, index) => (
        <Button
          key={index}
          title={item}
          onPress={() => navigation.navigate('ItemDetail', { item })}
        />
      ))}
    </View>
  );
};

export default ItemListScreen;
