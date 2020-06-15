import React from 'react';
import {View,Text,Switch,ScrollView } from 'react-native';
import Label from '../../components/label';
import Container from '../../components/container';
import TextDefault from '../../components/text_default';
import SwitchDefault from '../../components/switch_default';
import {Style} from './style';
import { TextInput } from 'react-native-gesture-handler';
export default function SendNotify(){

return( 
   
 <Container>
     <View style={Style.container1}>
         <View style={Style.boxNameSocialNetwork} >
             <TextDefault>youtube</TextDefault>
        </View>
     <View style={Style.boxSwitch}>
         <SwitchDefault
          onValueChange={()=>{}}
          value={true}
         />
    </View>
 </View> 
     <View style={Style.container1}>
            <View style={Style.boxNameSocialNetwork} >
                      <TextDefault>instagram</TextDefault>
            </View>
            <View style={Style.boxSwitch}>
                 <SwitchDefault
                    onValueChange={()=>{}}
                    value={true}
                    />
            </View>
        </View> 
        <View style={Style.container1}>
            <View style={Style.boxNameSocialNetwork} >
                      <TextDefault>twitter</TextDefault>
            </View>
            <View style={Style.boxSwitch}>
             <SwitchDefault
                    onValueChange={()=>{}}
                    value={true}
                    />
            </View>
        </View> 
        <View style={Style.container1}>
            <View style={Style.boxNameSocialNetwork} >
                      <TextDefault>twitch</TextDefault>
            </View>
            <View style={Style.boxSwitch}>
            <SwitchDefault
                    onValueChange={()=>{}}
                    value={true}
                    />
                
            </View>
        </View> 

          <View style={Style.container2}>
                <View style={Style.formGroup}>
                    <Label>titulo</Label>
                    <TextInput></TextInput>
                </View>
                <View style={Style.formGroup}>
                    <Label>mensagem</Label>
                    <TextInput></TextInput>
                </View>
                <View style={Style.formGroup}>
                    <Label>link</Label>
                    <TextInput></TextInput>
                </View>
    
          </View>
     
     </Container>
   
    )
}    