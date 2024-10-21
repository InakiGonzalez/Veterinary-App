import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export default function SignUpScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigation.navigate('MainMenu'))
      .catch((error) => setError(error.message));
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Sign Up" onPress={handleSignUp} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}
