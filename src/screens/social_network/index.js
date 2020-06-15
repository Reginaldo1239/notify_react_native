import React, { useEffect ,useState} from 'react';
import {View,ScrollView,Text,TextInput,Image} from 'react-native';

import { Style } from './style';
import Button from '../../components/button';
export default function socialNetwork({navigation,route}){
        const [ nameSocialNetwork,setNameSocialNetWork] = useState('');
        useEffect(()=>{
          //console.log(navigation)
          setNameSocialNetWork(route.name.split('/')[1])
        })
        //select name socialNetwork, according to the end of the route url
     
           
        

 return( 
    <View>
         <ScrollView> 
             <View style={Style.form}>
                 <View style={Style.formGroupProfile}>
                    <Image
                          style={Style.imageProfile}
                        source={{uri:'https://pbs.twimg.com/profile_images/656521467513937920/umj49LNm_400x400.jpg'}}/>
                </View>
             <View style={Style.formGroup}>
                <Text style={Style.label}>nome</Text> 
                <TextInput style={Style.input}/>
            </View>
            <View style={Style.formGroup}>
                <Text style={Style.label}>inscritos</Text>
                <TextInput style={Style.input}/>         
            </View>
            <View style={Style.formGroup}>
                <Text style={Style.label}>url</Text>
                <TextInput style={Style.input}/>
              </View>
              <View style={Style.formGroup}>
                  <Button
                  title={'sincronizar'}
                  onPress={()=>console.log('sad')}
                  ></Button>          
              </View>
            </View>
        
        </ScrollView>
    </View>
    )
} 