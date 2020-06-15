import React from 'react';
import {View} from 'react-native';
import {Style} from './style';
export default function Container({children}){
    return(
        <View style={Style.container}>
            {children}
            </View>
    )
}  