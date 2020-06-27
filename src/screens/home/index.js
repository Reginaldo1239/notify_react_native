import React from 'react';
import {View,Text,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import { Button } from 'react-native-elements';
import { Style } from './style';

import LinearGradient from 'react-native-linear-gradient';
import IconMenu from '../../components/icon_menu';
export default function Home({navigation}){
    changeRouter=(nameSocialNetwork)=>{
        navigation.navigate('listSubscribers',{nameSocialNetwork:nameSocialNetwork})
    } 
    
    return ( 
<SafeAreaView style={Style.containerHome}>
    <IconMenu navigation={navigation}></IconMenu>
    <ScrollView>

        <View style={Style.containerSocialNetworks}>
                <Text style={{fontSize:20,fontWeight:'bold'}}> total de inscritos</Text>
              <View style={Style.buttonSocialNetwork}  >
                 <LinearGradient colors={['#c4302b','#d95652','#ff0000']} style={Style.boxSocialNetwork} >
                     <Text style={Style.textSocialNetwork}  >youtube</Text>
                     <Text style={Style.textSocialNetwork} >1000</Text> 
                </LinearGradient>
                </View>   
    {/*'#515BD4', '#8134AF', '#DD2A7B','#FEDA77','#F58529'
    <TouchableOpacity style={Style.buttonSocialNetwork} onPress={()=>changeRouter('instagram')} >
         <LinearGradient colors={['#515BD4','#DD2A7B','#F58529']}  style={Style.boxSocialNetwork} >
           <Text style={Style.textSocialNetwork}>instagram</Text>
           <Text style={Style.textSocialNetwork}>1000</Text>
        </LinearGradient> 
     </TouchableOpacity>   
     <TouchableOpacity style={Style.buttonSocialNetwork} onPress={()=>changeRouter('twitter')} >
        <LinearGradient colors={['#00acee','#00d9cc']}  style={Style.boxSocialNetwork} >
             <Text style={Style.textSocialNetwork} >twitter</Text>
             <Text style={Style.textSocialNetwork}>1000</Text>
         </LinearGradient>
     </TouchableOpacity> 
     <TouchableOpacity style={Style.buttonSocialNetwork} onPress={()=>changeRouter('twitch')} >
     <LinearGradient colors={['#6441a5', '#815fc0','#503484']}  style={Style.boxSocialNetwork}  > 
            <Text style={Style.textSocialNetwork}>Twitch</Text>
            <Text style={Style.textSocialNetwork} >1000</Text>
    </LinearGradient>
    </TouchableOpacity> */}
                </View>
        </ScrollView>
        <View style={Style.footer}>
                    <View style={Style.boxFooter}>
                        <Button buttonStyle={Style.buttonFooter}
                         title={'enviar notificação'}
                         onPress={()=>navigation.navigate('sendNotify')}
                        ></Button>
                    </View>
                </View>   
</SafeAreaView> 
  
   
   )    
}   

/*
instagram cor logo
#515BD4-rgb(81,91,212),
#8134AF-rgb(123,52,175),
#DD2A7B-rgb(221,42,123),
#FEDA77-rgb(254,218,119),
#F58529- rgb(245,133,41)*/