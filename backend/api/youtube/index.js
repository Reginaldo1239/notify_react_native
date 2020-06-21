const fetch  = require('cross-fetch');
  
  
  
  
  
  const HEADERS= { "Content-Type": "application/x-www-form-urlencoded",
                Host:"accounts.google.com"}
  const CLIENT_ID = '863414992309-gvdttesrcp2amijt11r21ndvm6h78rtt.apps.googleusercontent.com';
  const CLIENT_SECRET= 'FBQ4x-8dJBjuaij6iH1XuRG5'
  const URlTOKEN = 'https://accounts.google.com/o/oauth2/token';  
  const API_KEY = 'AIzaSyD2Mxf-qoMBYdRZpm7iDFHZNgHAiANwaYg';
exports.generateToken=(code)=>{
    let body=`code=${code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=http://localhost:3000/token/&grant_type=authorization_code`;
    return new Promise((resolver,reject)=>{
        fetch(URlTOKEN,{
        headers: headers,
        method:'POST',  
        body:body
      }).then((res)=>{
          resolver({status:res,data:res.json()})
    })
      .catch((error)=>{console.log(error)})
    })
}
// atualiza o token do usuario automaticamente;
exports.updateToken=(refresh_token)=>{
        let body = 
        `client_id=${CLIENT_ID}&
        client_secret=${CLIENT_SECRET}&
        refresh_token=${refresh_token}&
        grant_type=refresh_token`;
    return new Promise((resolver,reject)=>{
        fetch(URlTOKEN,{
            headers:HEADERS,
            method:'POST',
            bodu:body
        }).then((res)=>{
            resolver({status:res,data:res.json()});
        }).catch((err)=>{
            console.log(err);
            reject(err);
        })
    })
}

exports.getChannelYoutubeV3=(endpoint,access_token)=>{
        const BASE_URL_YOUTUBE_V3 = 'https://www.googleapis.com/youtube/v3/'
    return new Promise((resolver,reject)=>{
        fetch(BASE_URL_YOUTUBE_V3+endpoint+'&key='+API_KEY,{
            method: 'GET',
            headers:{
                Host: "www.googleapis.com",
                Authorization:'Bearer '+access_token,
                Accept: 'application/json',
            }
        }).then((res)=>{
            resolver(res.json());
        }).catch((e)=>{
            console.log(e)
            reject(false);
        })
    })
}