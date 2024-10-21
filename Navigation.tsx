import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import MainMenuScreen from './components/MainMenuScreen';
import NewAnimalScreen from './components/NewAnimalScreen';
import AnimalDetailScreen from './components/AnimalDetailScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="MainMenu" component={MainMenuScreen} />
      <Stack.Screen name="NewAnimal" component={NewAnimalScreen} />
      <Stack.Screen name="AnimalDetail" component={AnimalDetailScreen} />
    </Stack.Navigator>
  );
}
