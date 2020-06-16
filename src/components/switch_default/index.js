import React from 'react';
import{Switch }from 'react-native';
import {RED,RED_STRONG} from '../../config_style';
export default function SwitchDefault(props){
    let {value}=props;
    return(
        <Switch
        trackColor={{ false:'#C8C8C8', true: RED }}
        thumbColor={value ?'white' : 'white'}  
         ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{props.onValueChange(value)} }
        value={value} 
        > 

        </Switch>
    )
}