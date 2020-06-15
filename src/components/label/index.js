import React from 'react';
import {Text} from 'react-native';
import {Style} from './style';
export default function Label({children}){
    return(
        <Text style={Style.label}>{children}</Text>
    )
} 