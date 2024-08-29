import React from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import useFetch from './useFetch';
import './CustomHookComponent.css';

const CustomHookComponent = () => {
  const { data, loading, error } = useFetch('https://api.github.com/users');

  if (loading) {
    return <ActivityIndicator size="large" className="loader" />;
  }

  if (error) {
    return (
      <View className="errorContainer">
        <Text className="errorText">Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="itemContainer">
          <Text className="itemText">{item.login}</Text>
        </View>
      )}
    />
  );
};

export default CustomHookComponent;
