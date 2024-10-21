import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AnimalDetailScreen({ route }: any) {
  const { animal } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name: {animal.name}</Text>
      <Text>Age: {animal.age}</Text>
      {animal.imageUrl ? (
        <Image source={{ uri: animal.imageUrl }} style={styles.image} />
      ) : null}
      {/* Add other animal details here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 12,
  },
});
