import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


//import Icon from 'react-native-vector-icons/AntDesign'
import Login from './src/screens/login';
import RegisterUser from './src/screens/register_user';
import Home from './src/screens/home';
import TabsSocialNetWorkUpdateInfo from './src/routes/tab_social_network_update_info';
import DrawerHome from './src/routes/drawer_home';

import MsgErroForm  from './src/components/msgErroForm';
import ListSubscribersSocialNetwork from './src/screens/list_subscribers_social_network';
import SendNotify from './src/screens/send_notify';
const Stack = createStackNavigator();
function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen 
           options={{  
           headerShown: false,
           }} 
          name="Login" component={Login}/>
            <Stack.Screen
           options={{
           headerShown: false,
           }} 
          name="RegisterUser" component={RegisterUser}/>
            <Stack.Screen
            options={{
              headerShown:false,
              title:'total de inscritos'
            }} 
              name="Home" component={DrawerHome}
            />
            <Stack.Screen
              options={{
                headerShown:false,
              }}
              name='listSubscribers'
              component={ListSubscribersSocialNetwork}
              />
              <Stack.Screen
                options={{
                  headerShown:false,
                  cardStyle:{ backgroundColor: '#F0EFF4', }
                }}
                name='sendNotify'
                component={SendNotify}/>
      </Stack.Navigator>  
    </NavigationContainer> 
  );
}


function HomeDrawer(){
  const Drawer = createDrawerNavigator();
  return(  
    <Drawer.Navigator>
     <Drawer.Screen
      drawerLabel={'home'}
      options={
        { drawerLabel:'home'}
      }
      name='Home' component={Home}/>
    <Drawer.Screen 
      options={
        {drawerLabel:'redes sociais'}
      }
      name ='infoSocialNetworks' component={TabsSocialNetWorkUpdateInfo}/>
 
   <Drawer.Screen  
      options={
        {drawerLabel:'notificações'} 
      }
      name ='notify' component={Home}/>
   <Drawer.Screen 
      name='profile'
      options={
        {drawerLabel:'perfil'} 
      }
      name ='EditProfile' component={Home}/>
    </Drawer.Navigator>
    
  )
}



export default App; 