
const TokenAuthModel = require('../../../models/influencer/token_auth');
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


    /*   if(!Validation.isString(code)){
            errors.push({code:'its not string'})
        }else if(!Validation.maxLength(code,255)){
            errors.push({code:'max lenght 255'})
            msgError.msg='max lenght 255'
        }*/
        if(!Validation.nameSocialNetwork(social_network)){
            errors.push({social_network:'invalid social network name'});
            msgError.msg='invalid social network name'
        }
        console.log(errors)
        if(errors.length==0){
            try{
                let insert =await TokenAuthModel.initSolicitAuth({id_user,social_network,status});
                insert.insertId= await Criptography.encript(insert.insertId);
                res.status(200).send(insert);
            }catch(e){
                console.log(e);
                res.status(500).send({msg:'an error has occurred'})
            }
        }else{
            res.status(400).send(msgError);
        }
}