import React, { useEffect, useState } from 'react';
import { View, Button, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function MainMenuScreen({ navigation }) {
  const [animals, setAnimals] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchAnimals = async () => {
      const querySnapshot = await getDocs(collection(db, 'animals'));
      const animalList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAnimals(animalList);
    };

    fetchAnimals();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('AnimalDetail', { animal: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Add New Animal" onPress={() => navigation.navigate('NewAnimal')} />
      {animals.length > 0 ? (
        <FlatList
          data={animals}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text>No animals available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
});
