import React, { useState } from 'react';
import {View,Text,Switch,ScrollView } from 'react-native';
import Label from '../../components/label';
import Container from '../../components/container';
import TextDefault from '../../components/text_default';
import SwitchDefault from '../../components/switch_default';
import {Style} from './style';
import Input from '../../components/input';
import Button from '../../components/button';
import MsgErroForm from '../../components/msgErroForm';
import Validation from '../../global/validation';
export default function SendNotify(){
    const [title,setTitle]=useState('');
    const [msg,setMsg] = useState('');
    const [link,setLink]=useState('');

    const [youtubeEnabled,setYoutubeEnabled] = useState('');
    const [instagramEnabled,setInstagramEnabled]= useState('');
    const [twitterEnabled,setTwitterEnabled] = useState('');
    const [twitchEnabled,setTwitchEnabled]=useState('');

    const [titleError,setTitleError]= useState('');
    const [msgError,setMsgError]= useState('');
    const [linkError,setLinkError]=useState('');
    const [socialNetworkError,setSocialNetworkError] = useState('');
    
   const selectSocialNetwork = (nameSocialNetwork)=>{
        if(youtubeEnabled || instagramEnabled || twitterEnabled||twitchEnabled){
            switch(nameSocialNetwork){
                case 'youtube':
                    setYoutubeEnabled(false);
                    break;
                case 'instagram':
                    setInstagramEnabled(false);
                    break;
                case 'twitter':
                    setTwitterEnabled(false);
                    break;
                case 'twitch':
                    setTwitchEnabled(false);
                    break;      
            }
        }else{
            switch(nameSocialNetwork){
                case 'youtube':
                    setYoutubeEnabled(true);
                    break;
                case 'instagram':
                    setInstagramEnabled(true);
                    break;
                case 'twitter':
                    setTwitterEnabled(true);
                    break;
                case 'twitch':
                    setTwitchEnabled(true);
                    break;      
            }
        }
    }
    const validForm = ()=>{
        setTitleError('');
        setMsgError('');
        setLinkError('');
        setSocialNetworkError('');
        let errors = []

        if(!Validation.minLength(title,1)){
            setTitleError('o campo está vazio');
            errors.push({title:'o campo está vazio'})
        }
        if(!Validation.minLength(msg,1)){
            setMsgError('o campo está vazio');
            errors.push({msg:'o campo está vazio'})
        }else if(!Validation.maxLength(msg,200)){
            setMsgError('aceita no  maximo 200 caracteres')
            errors.push({msg:'o campo aceita no maximo 200 caracteres'})
        }
        if(!Validation.minLength(link,1)){
            setLinkError('o campo está vazio');
            errors.push({link:'o campo está vazio'})
        }else if(!Validation.linkValid(link)){
            setLinkError('link invalido');
            errors.push({link:'link invalido'})
        }
        if(youtubeEnabled || instagramEnabled || twitterEnabled ||twitchEnabled){
        }else{
            setSocialNetworkError('selecione uma rede social')
            errors.push({socialNetwork:'selecione uma rede social'})
        }
            if(errors.length==0){
                sendForm();
            }
    }
    const  sendForm=()=>{

    }

return( 
 <Container>
     <ScrollView>
     <View style={Style.container1}>
         <View style={Style.boxNameSocialNetwork} >
             <TextDefault>youtube</TextDefault>
        </View>
     <View style={Style.boxSwitch}>
         <SwitchDefault
          onValueChange={()=>{selectSocialNetwork('youtube')}}
          value={youtubeEnabled}
         /> 
    </View>
 </View> 
     <View style={Style.container1}>
            <View style={Style.boxNameSocialNetwork} >
                      <TextDefault>instagram</TextDefault>
            </View>
            <View style={Style.boxSwitch}>
                 <SwitchDefault
                    onValueChange={()=>{selectSocialNetwork('instagram')}}
                    value={instagramEnabled}
                    />
            </View>
        </View> 
        <View style={Style.container1}>
            <View style={Style.boxNameSocialNetwork} >
                      <TextDefault>twitter</TextDefault>
            </View>
            <View style={Style.boxSwitch}>
             <SwitchDefault
                    onValueChange={()=>{selectSocialNetwork('twitter')}}
                    value={twitterEnabled}
                    />
            </View>
        </View> 
        <View style={Style.container1}>
            <View style={Style.boxNameSocialNetwork} >
                      <TextDefault>twitch</TextDefault>
            </View>
            <View style={Style.boxSwitch}>
            <SwitchDefault
                    onValueChange={()=>{selectSocialNetwork('twitch')}}
                    value={twitchEnabled}
                    />
            </View>
            <MsgErroForm>{socialNetworkError}</MsgErroForm>
        </View> 
          <View style={Style.container2}> 
                <View style={Style.formGroup}>
                    <Label>titulo</Label>
                    <Input
                    onChangeText={(text)=>setTitle(text)}
                    value={title}
                    ></Input>
                    <MsgErroForm>{titleError}</MsgErroForm>
                </View> 
                <View style={Style.formGroup}>
                    <Label>mensagem</Label>
                   <Input
                   onChangeText={text=>setMsg(text)}
                   value={msg}
                   />
                   <MsgErroForm>{msgError}</MsgErroForm>
                </View>
                <View style={Style.formGroup}>
                    <Label>link</Label>
                    <Input
                    onChangeText={text=>setLink(text)}
                    value={link}
                    />
                    <MsgErroForm>{linkError}</MsgErroForm>
                </View>
                <View style={Style.formGroup}>
                    <Button
                    title={'enviar'}
                    onPress={()=>validForm()}
                    loaging={false}
                    ></Button>
                </View>
                
          </View>
          </ScrollView>
     </Container>
   
    )
}    