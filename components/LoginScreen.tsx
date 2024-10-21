import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigation.navigate('MainMenu'))
      .catch(() => setError('Invalid login credentials'));
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Log In" onPress={handleLogin} />
      {error ? <Text>{error}</Text> : null}
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}