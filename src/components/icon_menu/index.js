import React, { useEffect } from 'react';
import {View} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconOcticons from 'react-native-vector-icons/Octicons'
import { useIsDrawerOpen } from '@react-navigation/drawer';

 
export default function IconMenu({navigation}){

    const isDrawerOpen = useIsDrawerOpen();

    return(
        <View style={{alignItems:'flex-end'}}>
               {isDrawerOpen?(
  <IconOcticons 
  onPress={()=>navigation.toggleDrawer()}
  name='x' size={45}  ></IconOcticons>

               ):(
                     <IconEntypo 
                     onPress={()=>navigation.toggleDrawer()}
                     name='menu' size={45}  ></IconEntypo>
                   
               )}
  
    </View>
    )
}  