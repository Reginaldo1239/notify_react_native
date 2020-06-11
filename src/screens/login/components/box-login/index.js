import React,{useState} from 'react';
import { Input ,Button} from 'react-native-elements';
import {View,Text} from 'react-native';

import {Style} from './style';

export default function BoxLogin(props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
    <View style ={Style.formLogin}>
        <Input 
            labelStyle={Style.label}
            label={'email'} 
            value={email}
            onChangeText={text=>{setEmail(text)}}
             />
         <Input
             labelStyle={Style.label}
            label={'senha'}
            secureTextEntry={true}  
            onChangeText={text=>{setPassword(text)}}
             />
    <View style={{width:'30%'}}> 
    <Button 
        title="enviar"
        type="outline"
        titleStyle={{color:'#0A000D'}}
        buttonStyle={{ borderColor:'#0A000D'}}
        containerStyle={{ borderColor:'#0A000D'}} 
            /> 
    </View>   
     </View> 
        )
}