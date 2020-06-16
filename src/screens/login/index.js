import React from 'react';
import {View,Text} from 'react-native';
import BoxLogin from './components/box-login';
import { Style } from './style';
export default function Login({navigation}){
 return(
     <View style={Style.container}>
        <BoxLogin></BoxLogin>
        <View style={Style.boxText} >
        <Text style={Style.styleLink} >esqueci a senha</Text>
      </View>
      <View style={Style.boxText} >
        <Text style={Style.styleLink} onPress={()=>{navigation.navigate('RegisterUser')}}>primeiro acesso</Text>
          </View>  
     

    </View> 
        )
}     