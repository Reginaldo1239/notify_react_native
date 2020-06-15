import React from 'react';
import {Text} from 'react-native';
import {Style} from './style';
 
export default function TextDefault({children}){
    return(
    <Text style={Style.text}>{children}</Text>
    )
} 
 