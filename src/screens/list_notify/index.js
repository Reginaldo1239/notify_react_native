import React from 'react';
import {View,Text,ScrollView,FlatList } from 'react-native';
import Container from '../../components/container';
import Button from '../../components/button';
import Item from './component/item';

export default function ListNotify({navigation}){
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          msg:'dddddddddd',
          link:'ddd'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          msg:'dddddddddd',
          link:'ddd'
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          msg:'dddddddddd',
          link:'ddd'
        },
      ];
      
return(
<Container>
      <ScrollView>
              <View>
                <Button
                title={'nova notificação'}
                onPress={()=>navigation.navigate('sendNotify')}
                ></Button>
            
            </View>
            <FlatList
            data={DATA}
            renderItem= {({item})=><Item link={item.link} msg={item.msg} title={item.title} 
            keyExtractor={item => item.id}
            />
        }
            >
                    
            </FlatList>
       </ScrollView>
  </Container> 
    )
}


