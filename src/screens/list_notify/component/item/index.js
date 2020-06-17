import React from 'react';
import {View,Text} from 'react-native';
import TextDefault from '../../../../components/text_default'
import {Style} from './style'; 
export default function Item({ title ,msg,link }){

    return (
        <View style={Style.container} > 
        <TextDefault >{title}</TextDefault>
             <TextDefault>{msg}</TextDefault>
         <TextDefault>{link}</TextDefault>
      </View> 
    )
} 