import React from 'react';
import{Switch }from 'react-native';

export default function SwitchDefault(props){
    let {value}=props;
    return(
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{props.onValueChange()} }
        value={value} 
        > 

        </Switch>
    )
}