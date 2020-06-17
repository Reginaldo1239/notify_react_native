import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsSocialNetWorkUpdateInfo from '../tab_social_network_update_info';
import Home from '../../screens/home';
import EditProfile from '../../screens/edit_profile'; 
import ListNotify from '../../screens/list_notify';
export default  function DrawerHome(){
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
        name ='listNotify' component={ListNotify}/>
     <Drawer.Screen 
        name='profile'
        options={
          {drawerLabel:'perfil'} 
        }
        name ='EditProfile' component={EditProfile}/>
      </Drawer.Navigator>
      
    )
  }