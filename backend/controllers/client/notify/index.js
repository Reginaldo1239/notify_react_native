const Validation = require('../../../global/validation');
const NotifyModel = require('../../../models/client/notify');
exports.ChangeStatusNotify= async(req,res)=>{
    let {id_user} = req.headers;
    let {new_status_notify,id_subscriber} = req.body;

    let errors = [];
    let msgError = {msg:''}
    if(!Validation.isBoolean(new_status_notify)){
        errors.push({new_status_notify:'valor invalido'});
    }

    if(errors.length){
        try{
            let alterStatusNotify = await NotifyModel.ChangeStatusNotify({id_user,id_subscriber,new_status_notify});
            res.status(200).send(alterStatusNotify);
        }catch(e){
            console.log(e);
            res.status(500).send({msg:'ocorreu um erro'})
        }
    }

}