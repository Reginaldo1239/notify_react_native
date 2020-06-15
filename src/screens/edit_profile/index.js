import React, { useState } from 'react';
import {View,Text,TextInput} from 'react-native';
import Button  from '../../components/button';
import MsgErroForm from '../../components/msgErroForm';
import Validation  from '../../global/validation';
import { Style } from './style';

export default  function EditProfile(){
    const [currentPassword,setCurrentPassword] = useState('');
    const [newPassword,setNewPassoword] = useState('');
    const [confirmPassword,setConfirmPassword] =useState('');

    const [currentPasswordErro,setCurrentPasswordErro] = useState('');
    const [newPasswordErro,setNewPasswordErro]= useState('');
    const [confirmPasswordErro,setConfirmPasswordErro]= useState('');
     
   
    validForm=()=>{
            setCurrentPasswordErro('');
            setNewPasswordErro('');
            setConfirmPasswordErro('');
        if(!Validation.minLength(currentPassword,1)){
            setCurrentPasswordErro('o campo está vazio');
        }
        if(!Validation.minLength(newPassword,1)){
            setNewPasswordErro('o campo está vazio');
        }else if(!Validation.equalPassword(newPassword,confirmPassword)){
            setNewPasswordErro(' as senhas não são iguais');
        }
        if(!Validation.minLength(confirmPassword,1)){
            setConfirmPasswordErro('o campo está vazio');
        }
    }
return(
     <View style={Style.containerEditProfile}>
            <View style={Style.formLogin}>
                    <Text style={Style.label}> senha atual</Text>
                    <TextInput 
                    onChangeText={text=>setCurrentPassword(text)}
                    style={Style.input} 
                    secureTextEntry
                    maxLength={20}/>
                    <MsgErroForm>{currentPasswordErro}</MsgErroForm>
            </View>
            <View style ={Style.formLogin}>
                    <Text style={Style.label}>nova senha</Text>
                    <TextInput 
                    onChangeText={text=>setNewPassoword(text)}
                    style={Style.input}
                    secureTextEntry
                    maxLength={20}
                    /> 
                    <MsgErroForm>{newPasswordErro}</MsgErroForm>
                </View>
            <View style={Style.formLogin}>
                    <Text style={Style.label}>confirmar senha</Text>
                    <TextInput 
                    onChangeText={text=>setConfirmPassword(text)}
                    style={Style.input}
                    maxLength={20}
                    secureTextEntry/>
                    <MsgErroForm>{confirmPasswordErro}</MsgErroForm>
                </View>
            <View style={Style.formLogin}> 
                <Button
                    title={'salvar'}
                    onPress={()=>validForm()}
                /> 
            </View>              
 </View>
        
 )
}