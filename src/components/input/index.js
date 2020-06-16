import React from 'react';
import {TextInput} from 'react-native';
import { Style } from './style';

export default function Input(props){
    let {value,password} =props;
    return(
        password?(
        <TextInput
        style={Style.input}
        onChangeText={text=>props.onChangeText(text)}
        value={value}
        secureTextEntry
        ></TextInput>
        ):(
            <TextInput
            style={Style.input}
            onChangeText={text=>props.onChangeText(text)}
            value={value}
            ></TextInput>

        )
    )
}    