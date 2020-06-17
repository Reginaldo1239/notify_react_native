import React  from 'react';

import {Button } from 'react-native-elements';
import { Style } from './style';
export default function Button1(props){
   let {title,loading} = props;
    return( 
        loading?(
            <Button
            loading
          />
        ):( 
            <Button
            title={title}
            onPress={()=>props.onPress()}  
            buttonStyle={Style.button}
            titleStyle={Style.textTitle}
          />
        )
      
    )
}

//android\app\debug.keystore
// keytool -exportcert -list -v \
//-alias notify -keystore android\app\debug.keystore
//ggg
//keytool -exportcert -list -v -alias notify -keystore android\app\debug.keystore