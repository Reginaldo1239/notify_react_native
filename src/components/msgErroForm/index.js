import React from 'react';
import {View,Text } from 'react-native';
import {Style} from './style.js';
 function MsgErroForm({children}){
    return(
        <View style={Style.container}>
              <Text style={Style.text}>{children}</Text>
            </View>
    )
}
export default   MsgErroForm;