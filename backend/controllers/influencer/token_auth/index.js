
const TokenAuthModel = require('../../../models/influencer/token_auth');
const TokenAuthModel1 = require('../../influencer/token_auth')
const Validation = require('../../../global/validation');
const Criptography = require('../../../global/cryptography');

exports.tokenAuth=(req,res)=>{
    let {code,status} = req.body;
}

exports.initSolicitAuth = async(req,res)=>{
    let {id_user} = req.headers;
    let {social_network} = req.body;
    let errors = [];
    let status='init';
    let msgError = {msg:''};
        if(!Validation.nameSocialNetwork(social_network)){
            errors.push({social_network:'invalid social network name'});
            msgError.msg='invalid social network name'
        }
        if(errors.length==0){
            try{
              //  let insert =await TokenAuthModel.initSolicitAuth({id_user,social_network,status});
             //   insert.insertId= await Criptography.encript(insert.insertId);
             // enviar um token para o front  com informações do usuario ele enviar o token no state para o google no auth2.0 ;
             let tokenJwt = await Criptography.generateTokenJwt({id_user,social_network});
             //console.log(tokenJwt)
                res.status(200).send({token:tokenJwt}); 
            }catch(e){
                console.log(e);
                res.status(500).send({msg:'an error has occurred'})
            }
        }else{
            res.status(400).send(msgError);
        }
}
