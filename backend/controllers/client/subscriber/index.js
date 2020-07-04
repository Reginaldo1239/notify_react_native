const socialNetwork  = require('../../../global/socialNetwork');
const subscriberModel  = require('../../../models/client/subscriber');
const notifyModel  = require('../../../models/client/subscriber');
const Validation = require('../../../global/validation');
exports.listSubscribers= async (req,res)=>{
    let {id_user} = req.headers;
    let {page,limit} = req.query;
    let errors = [];
    let msgError = {msg:''};
    if(limit>100&& limit !=undefined){
        errors.push({limit:'limit retorna no maximo 100 itens por solicitação '})
    }
    console.log(Validation.isNumber(page))
    if(!Validation.isNumber(page)&& page !=undefined){
        errors.push({page:'page is no int '});
        msgError.msg='page is no int ';
    }
    if(errors.length==0){
        try{
            limit = parseInt(limit)
        let listSubscribers = await subscriberModel.listSubscribers({id_user,page,limit});
            res.status(200).send(listSubscribers);
        }catch(e){
            console.log(e);  
            res.status(500).send({msg:'ocorreu um erro'});
        }
    }else{
        res.status(401).send(msgError)
    }
    
}
// this function the user subscribing in social network
exports.subscriberSocialnetwork= async (req,res)=>{
    let {id_user} = req.headers;
    let {id_social_network} = req.body;
    let errors = [];
    let msgError = {msg:''};
    if( await !socialNetwork.existSocialNetwork(id_social_network)){
        errors.push({id_social_network:'id_social_network não existe '});
        msgError.msg='id_social_network não existe';
    }
    if( await !socialNetwork.checkedIfUserRegisteredSocialNetwork({id_user,id_social_network})){
        errors.push({checkedIfUserRegisteredSocialNetwork:'user is registered in socialNetwork'});
        msgError.msg = 'user is registered in socialNetwork';
    }
    if(errors.length==0){
        try{
       let resultInsert = await subscriberModel.subscriberSocialnetwork({id_user,id_social_network,notify:true});
        res.status(200).send(resultInsert);
        }catch(e){
            console.log(e);
            res.status(500).send({msg:'ocorreu um error'})
        }
    }else{
        res.status(400).send(msgError)
    }   


}
// this function the user unsubscribing in social network
exports.unsubscribeSocial =  async (req,res)=>{
    let {id_user} = req.headers;
    let {id_social_network} = req.body;
    let error = [];
    let msgError = {msg:''};
        try{
            let resultDelete = await subscriberModel.unsubscribeSocial({id_user,id_social_network});
            console.log(resultDelete)
             res.status(200).send(resultDelete);
        }catch(e){
            console.log(e); 
            res.status(500).send({msg:'ocorreu um error'})
        }
}
//get info profile influencer and if user is registered


exports.ChangeStatusNotify= async(req,res)=>{
    let {id_user} = req.headers;
    let {new_status_notify,id_subscriber} = req.body;
    let errors = [];
    let msgError = {msg:''}
    if(!Validation.isBoolean(new_status_notify)){  
        errors.push({new_status_notify:'valor invalido'});
        msgError.msg='new_status_notify value invalid '
    }
    if(errors.length==0){
        try{
            let alterStatusNotify = await subscriberModel.ChangeStatusNotify({id_user,id_subscriber,new_status_notify});
            res.status(200).send(alterStatusNotify);
        }catch(e){
            console.log(e);
            res.status(500).send({msg:'ocorreu um erro'})
        }
    }else{
        res.status(400).send(msgError)
    }
}