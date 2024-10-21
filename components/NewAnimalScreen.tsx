import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function NewAnimalView({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [imageUri, setImageUri] = useState('');

  const db = getFirestore();

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const handleSubmit = async () => {
    const newAnimal = {
      name,
      age,
      imageUrl: imageUri, // Store the image URL
    };

    try {
      await addDoc(collection(db, 'animals'), newAnimal);
      navigation.navigate('MainMenu'); // Navigate back to MainMenu after submission
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Animal Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Animal Age"
        value={age}
        onChangeText={setAge}
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Select Image" onPress={handleImagePicker} />
      {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}
      <Button title="Add Animal" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
});
