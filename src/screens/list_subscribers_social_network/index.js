import React, { useEffect } from 'react';
import {View,ScrollView,FlatList,Text} from 'react-native';
import {Style} from './style';
export default function ListSubscribersSocialNetwork({route }){

    let DATA = [{email:'reignaldo@gmail.com',name:'reginadlo'},{email:'karol@gmail.com',name:'reginadlo'},{email:'renata@gmail.com',name:'reginadlo'}]
    
      for(let i=0 ;i<100;i++){
            DATA.push({email:'reignaldo'+i+'@gmail.com',name:'reginadlo'})
        }
 


    useEffect(()=>{
        console.log(route )
    })
    return(
        <View style={Style.container}>
            <ScrollView>
                    <FlatList
                    data={DATA}
                    renderItem={({item})=><Item email={item.email} name={item.name}></Item>}
                    >
                    </FlatList>
            </ScrollView>
        </View>
    )
}

function Item({email,name}){
    return(
        <View style={Style.containerItem}>
            <Text style={Style.text}>{email}</Text>
            <Text style={Style.text}>{name}</Text>
        </View>
    )
}