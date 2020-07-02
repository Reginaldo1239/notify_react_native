const Validation = require('../../../global/validation');
const User  = require('../../../global/user');
const Criptography = require('../../../global/cryptography');
const LoginModel = require('../../../models/public/login')
var jwt = require('jsonwebtoken');


exports.login= async (req,res)=>{
    let {email,type_profile,password} =req.body;
    let erros= [];
    let msgErro= {msg:''};    

    if(!Validation.emailValid(email)){
        erros.push({email:'email invalido'});
        }
     let infoUser=await LoginModel.infoUser({email,type_profile});

    if(infoUser.length>0){
            if(!Criptography.chekHash(password,infoUser[0].password)){
                msgErro.msg="email ou senha incorretos";
                erros.push({email:'email ou senha incorretos'});
            }
    }else{
        msgErro.msg="email ou senha incorretos";
        erros.push({email:'email ou senha incorretos'});
    } 
       if(erros.length==0){ 

         let token=await  Criptography.generateTokenJwt({ name: 'reginaldo' ,id_user : infoUser.id_user ,type_profile:type_profile })
   
        res.status(200).send({token});
         /*  jwt.sign({ name: 'reginaldo' ,id_user : infoUser.id_user ,profile:'1,2' }, 'privatssseKey', { algorithm: 'HS512' }, function(err, token) {
        if(typeof token ==='string'){
            res.status(200).send({token:token})
        }else{
            res.status(500).send({msg:'ocorreu um erro'})
        }
    });*/
    }else{
        res.status(400).send(msgErro);
    }
      
           /*   jwt.verify(token, 'privatssseKey' , { algorithms: ['HS512'] }, function (err, payload) {
   
          });*/
       

}  