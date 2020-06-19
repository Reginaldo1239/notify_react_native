import React, { useEffect ,useState} from 'react';
import {View,ScrollView,Text,TextInput,Image,BackHandler,Linking } from 'react-native';
import { Style } from './style';
import Button from '../../components/button';
import IconMenu from '../../components/icon_menu';
import { WebView } from 'react-native-webview';
import {CLINT_ID_YOUTUBE} from '../../keyApis';
export default function socialNetwork({navigation,route}){
        const [ nameSocialNetwork,setNameSocialNetWork] = useState('123');
        const [start,setStart] = useState(true);
        const [seeWebView,setSeeWebView] = useState(false);
        const urlYoutubeAuth=`https://accounts.google.com/o/oauth2/auth?
        client_id=${CLINT_ID_YOUTUBE}&
        redirect_uri=http://055a4182a2dc.ngrok.io/toke&
        scope=https://www.googleapis.com/auth/youtube&
        response_type=code&
        access_type=offline`;

        useEffect(()=>{
          setNameSocialNetWork(route.name.split('/')[1]);
          
        }) 
        
        

 return( 

    <View>
         <ScrollView> 
             <IconMenu navigation={navigation}></IconMenu>
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
                  onPress={()=>Linking.openURL(LINKGOOGLE)}
                  ></Button>          
              </View>
            </View>
        
        </ScrollView>
    </View>
     
    )
} 