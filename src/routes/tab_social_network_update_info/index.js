import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SocialNetwork from '../../screens/social_network';  
export default function TabsSocialNetWorksUpdateInfo({navigation}){
    const Tab = createBottomTabNavigator();

 
    
    return(
          <Tab.Navigator 
          
          tabBarOptions={{
            activeBackgroundColor:'#F0EFF4', 
            labelStyle:{color:'black'},     
            backBehavior:'initialRoute'
          }} 
          >
            <Tab.Screen 
            name='conect/youtube'
             component={SocialNetwork}
            options={{
              tabBarLabel: 'youtube',
              tabBarIcon: ({ color, size }) => (
                <Icon name="youtube" color={'red'} size={40}/>
              ),
            }}  
           />
            <Tab.Screen 
           name='conect/instagram'
           initialParams={{nameSocialNetwork:'instagram'}}
            component={SocialNetwork}
              options={{
                tabBarLabel:'instagram',
              tabBarIcon:({color,size})=>(
                <Icon name='instagram' size={40} color={'#F58529'}/>
              )}}/>
            <Tab.Screen name= 'conect/twitter' component={SocialNetwork}
              options={{tabBarLabel:'twitter',
              tabBarIcon:({color,size})=>(
                <Icon name='twitter' size={40} color='#00acee'/>
              )}}/>
            <Tab.Screen
              name='conect/twitch'
              initialParams={{nameSocialNetwork:'twitch'}}
              component={SocialNetwork}
              options={{
                showLabel:false,
                activeBackgroundColor:'#ccc',
                tabBarLabel:'twitch',
              tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name='twitch' size={40} color='#6441a5' />
              )}}
            />
          </Tab.Navigator>
    )
  
  }