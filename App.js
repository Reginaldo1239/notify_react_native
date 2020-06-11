import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/login';
import RegisterUser from './src/screens/register_user';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen
           options={{
           headerShown: false,
           }} 
          name="RegisterUser" component={RegisterUser}/>
        <Stack.Screen 
           options={{
           headerShown: false,
           }} 
          name="Login" component={Login}/>
      
      </Stack.Navigator>
       
       
    </NavigationContainer> 
  );
}

export default App;