import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsSocialNetWorkUpdateInfo from '../tab_social_network_update_info';
import Home from '../../screens/home';
import EditProfile from '../../screens/edit_profile'; 
import ListNotify from '../../screens/list_notify';
import SocialNetwork from '../../screens/social_network';

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
          {drawerLabel:'sincronizar'}
        }
        name ='infoSocialNetworks' component={SocialNetwork}/>
   
     <Drawer.Screen  
        options={ 
          {drawerLabel:'notificações'} 
        }
        name ='listNotify' component={ListNotify}/>
     <Drawer.Screen 
        name='profile'
        options={
          {drawerLabel:'alterar senha'} 
        }
        name ='EditProfile' component={EditProfile}/>
      </Drawer.Navigator>
      
    )
  }