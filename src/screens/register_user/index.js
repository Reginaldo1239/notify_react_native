import React,{useState, useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';

import {View,Text,TextInput,SafeAreaView, ScrollView} from 'react-native'

import {Button} from 'react-native-elements';
import {Style} from './style'; 
import Convert from '../../global/convert'; 
import  MsgErroForm from '../../components/msgErroForm/index.js';
import Validation from '../../global/validation'
import Api from '../../service/api-private';
import axios from 'axios';
 export default function RegisterUser(){
    const [buttonAnimation,setButtonAnimation] = useState(false);

    const [name,setName] = useState('reginaldo');
    const [email,setEmail]= useState('reginaldo.melo56@gmail.com');
    const [dateOfBirth,setDateOfBirth]=useState('2020-08-06');
    const [country,setCountry]= useState('BRA'); 
    const [password,setPassword] = useState('123456');
    const [confirmPassword,setConfirmPassword] =useState('123456');
    const [date, setDate] = useState(new Date(1598051730000));
    const [showDatePicker, setShowDatePicker] = useState(false);
   //msg erros form
   const [nameErro,setNameErro] = useState('');
   const [emailErro,setEmailErro] = useState('');
   const [dateOfBirthErro,setDateOfBirthErro]= useState('');
   const [countryErro,setCountryErro] = useState('');
   const [passwordErro,setPassowordErro] = useState('');
   const [confirmPasswordErro,setConfirmPasswordErro]=useState('');
   const [r,setR] = useState('')
     


    const onChangeDateOfBirth = (event, selectedDate) =>{ 
        const currentDate = selectedDate || date;
        //setShow(Platform.OS === 'ios');
        setShowDatePicker(false);
        setDateOfBirth(Convert.datePickerVisibleToClient(selectedDate))
      }; 
     
      validationForm = ()=>{
        setButtonAnimation(true);

        setNameErro('') 
        setEmailErro('')
        setDateOfBirthErro('');
        setCountryErro('');
        setPassowordErro('');
        setConfirmPasswordErro('');
        let erros =[];
          if(!Validation.minLength(name,1)){
              setNameErro('o campo está vazio ')
              erros.push({name:'o campo name está vazio'})
          }
          if(!Validation.minLength(email,1)){
              setEmailErro('o campo está vazio');
              erros.push({email:'o campo name está vazio'})
          }else if(!Validation.emailValid(email)){
            setEmailErro('email invalido');
            erros.push({email:'o campo email está vazio'})
          } 
          if(!Validation.dateOfBirthValid(dateOfBirth)){
              setDateOfBirthErro('selecione o seu dia de nascimento');
              erros.push({dateOfBirth:'selecione o seu de nascimento'})
          }
    
          if(!Validation.country(country)){
            setCountryErro('selecione um pais valido');
            erros.push({country:'selecione um pais valido'})
          }
          if(!Validation.minLength(password,1)){
              setPassowordErro({password:'o campo pais está vazio'})
              erros.push({password:'selecione um pais valido'})
          }
          console.log(confirmPassword)
        if(!Validation.minLength(confirmPassword,1)){
            setConfirmPasswordErro('o campo está vazio');
        }else if(!Validation.equalPassword(password,confirmPassword) && !Validation.minLength(confirmPassword,1)){
              setPassowordErro('as senhas não são iguais')
          }
            if(erros.length==0){
              sendForm();
            }else{  
              setButtonAnimation(false);
            }
         
      }
      sendForm= async ()=>{ 
        setEmailErro('');
        let post = {
            name:'name',  
            email:email,
            country:country,
            date_of_birth:dateOfBirth,
            password:password,
            confirm_password:confirmPassword       
         }
      let resultInsert = await  Api.post('register_user',post);
      let data  = await resultInsert.data;
         if(resultInsert.status==200){
            console.log('data')
            console.log(data)

       
         }else if(resultInsert.status==400){
          console.log('data')
            console.log(data)
            if(data.msg==='email is registered'){
              setEmailErro('o email já esta cadastrado');
              setButtonAnimation(false);
            }
         }
       
     
             
       
        }  
    return ( 
       
        <SafeAreaView style={Style.containerRegisterUser} > 
              
            <ScrollView style={Style.center}>
                <View style={Style.formGroup} >
    <Text style={Style.label}
    onPress={()=>console.log(r)}
    >nome</Text>
                         <TextInput 
                         autoCompleteType ='name'
                         style={Style.textInput}
                         onChangeText={ text =>setName(text)}
                         ></TextInput>
                       <MsgErroForm>{nameErro}</MsgErroForm>   
                              </View>
                         
                <View style={Style.formGroup} >
                    <Text 
                    style={Style.label}
                    >email</Text>
                         <TextInput
                         autoCompleteType='email'
                         onChangeText ={text=>setEmail(text)}
                         style={Style.textInput} ></TextInput>
                          <MsgErroForm>{emailErro}</MsgErroForm> 
                              </View>    
                <View style={Style.formGroup}  >
                    <Text 
                    style={Style.labelDateOfBirth}  onPress={()=>{setShowDatePicker(true)}}>{dateOfBirth}</Text>
                             <MsgErroForm>{dateOfBirthErro}</MsgErroForm> 
                              </View>    
                                            
      {showDatePicker && (
        <DateTimePicker 
          testID="dateTimePicker" 
          value={date}   
          mode={'date'}
          display="calendar"
          onChange={(event,selectedDate)=>onChangeDateOfBirth(event,selectedDate)}
          titleStyle={{    alignItems:'left'}}
        />
        )}
          <View style={Style.formGroup} >
        <Picker
            selectedValue={country}               
            onValueChange={(itemValue)=>setCountry(itemValue)}>
            <Picker.Item  itemStyle ={{borderRadius:10}}style={{backgroundColor:'white'}} label="Pais" value="" /> 
            <Picker.Item label="Brasil" value="BRA" />
        <Picker.Item label="Estados Unidos" value="USA" />
        </Picker>
      <MsgErroForm>{countryErro}</MsgErroForm>
      </View>
        <View style={Style.formGroup} > 
                    <Text 
                    style={Style.label} >senha</Text>
                         <TextInput
                         secureTextEntry
                            style={Style.textInput}
                          onChangeText={text=>setPassword(text)}
                         ></TextInput>
                         <MsgErroForm>{passwordErro}</MsgErroForm> 
                              </View> 
        <View style={Style.formGroup} >
             <Text style={Style.label} >confirmar senha</Text>
                 <TextInput
                     secureTextEntry
                     style={Style.textInput}
                     onChangeText={text=>setConfirmPassword(text)}
                     ></TextInput>
                      <MsgErroForm>{confirmPasswordErro}</MsgErroForm> 
                     </View>    
     <View style={Style.formGroup} style={Style.flex}>
         <View style={{width:'20%'}}>
            {buttonAnimation?(
                <Button
                onPress={()=>validationForm()}
                title="enviar"
                 type="outline" 
                 loading
                       />
            ):(
              <Button
              onPress={()=>validationForm()}
              title="enviar"
               type="outline"
             
                     />
            )}
           
            </View> 
    </View>                              
</ScrollView> 
        </SafeAreaView>
    )
}  

/*function ButtonDate(props){
    return (
            <View
            style={Style.dateOfBirthButton} 
                >
              <Text    
                >data de nascimento</Text>
            </View>

    )
}*/