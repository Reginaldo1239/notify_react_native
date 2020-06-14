import {StyleSheet} from 'react-native'
export const Style = StyleSheet.create({
    header:{
        margin:10,
      //  backgroundColor:'red',
        borderRadius:10,
        borderColor:'black',
        borderBottomWidth:0.4
    },
    textHeader:{
        color:'black',
        fontSize:23,
        textAlign:'center'
    },
    containerHome:{
        backgroundColor:'#F0EFF4',
        width:'100%',
        minHeight:'100%',
    },text:{
        color:'blue'
    },
    containerSocialNetworks:{
       flex:1,
       flexWrap:'wrap',
       flexDirection:'row',
       width:'100%',
       justifyContent:'center',
       marginTop:10,
       //backgroundColor:'blue'    
    },
    buttonSocialNetwork:{
        width:'48%', 
        margin:2,
    },
     boxSocialNetwork:{
        width:'100%', 
       // backgroundColor:'red',
      //  borderWidth:1,
       // borderColor:'red',
     //   margin:2,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:10
    },
    textSocialNetwork:{
        textAlign:'center', 
        color:'white',
        fontWeight:'bold',
        fontSize:20,

    },
    footer:{
        flex:1,
        justifyContent:'flex-end',
        minHeight:100
    },
    boxFooter:{
        margin:10,
    },
    buttonFooter:{
        borderRadius:10,
        backgroundColor:'red',
        fontSize:20
    }

     
 
}) 