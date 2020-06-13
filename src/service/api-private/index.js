
const axios = require('axios');

export default class apiPrivate{

    constructor(){
        axios.defaults.baseURL = 'http://192.168.15.1:3005/';
        axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
        axios.defaults.headers.post['Content-Type'] = 'application/json';
    }
    static get(endPoint){ 

    }

    static post = async  (endPoint,post)=>{
      console.log('response1' )
   return new Promise((resolver,reject)=>{
    fetch(`http://192.168.15.8:3005/${endPoint}`,{
      method: 'POST',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(post) 
    }).then((response) =>{
      resolver({status:response.status,data:response.json()}) 
    } ) 
    .then((json) => {
      console.log(json)
    })
    .catch((error) => {
      console.error(error);
    }); 

   }) 
  
  
  
 // fetch('https://rickandmortyapi.com/api/character/?page=19').then((res)=>console.log(res ) ).then((json)=>json)



}
  

}