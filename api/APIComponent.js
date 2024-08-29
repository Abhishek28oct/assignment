import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import './APIComponent.css';

const APIComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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

export default APIComponent;
