// atualiza a tabela code_auth_social_network 

const cryptografy = require('../../../global/cryptography');
const TokenAuthModel = require('../../../models/public/token_auth');
const TokenAuthModel1 = require('../../../models/public/token_auth');
const Validation  = require('../../../global/validation');
const fetch  = require('cross-fetch');

exports.update_code=async (req,res)=>{
    let {code,state} = req.body;
  let infoUser =await cryptografy.verifyTokenJwt(state);
  let existTokenUser = await TokenAuthModel.exist_token({id_user:infoUser.id_user,name_social_network:infoUser.social_network});
    let client_id = '863414992309-gvdttesrcp2amijt11r21ndvm6h78rtt.apps.googleusercontent.com';
      let client_secret= 'FBQ4x-8dJBjuaij6iH1XuRG5'

  let youtube=`code=${code}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=http://localhost:3000/token/&grant_type=authorization_code`

     let tokenUser= fetch('https://accounts.google.com/o/oauth2/token',{
        headers:  {
          "Content-Type": "application/x-www-form-urlencoded",
          Host:"accounts.google.com"
        }, 
        method:'post',  
        body:youtube
      }).then((res)=>res.json()).then((dados)=> dados).catch((error)=>{console.log(error)})

      tokenUser.then((dados)=>{
        let {access_token,refresh_token,token_type,scope,expires_in} =dados
        try{
          if(existTokenUser.length==0){
            let resultInsertToken =TokenAuthModel1.insertNewToken(
              {id_user:infoUser.id_user, 
              name_social_network:infoUser.social_network,
              access_token,
              refresh_token,
              scope,
              token_type,
              expires_in
              },
            )
          }else{
            let resultUpdate = TokenAuthModel.updateToken({
                id_user:infoUser.id_user,
                name_social_network:infoUser.social_network,  
                access_token,
                scope,
                token_type,
                expires_in,
            })
          }
        }catch(e){
          console.log(e)
          res.state(500).send({msg:'ocorreu um erro'})
        }
        })
      }

    
 
 

 
 