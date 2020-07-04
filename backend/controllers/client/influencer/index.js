const Validation = require('../../../global/validation');
const InfluencerModel = require('../../../models/client/influencer')
exports.detailInfluencer = async(req,res)=>{
    let {id_user} = req.headers;   
    let {id_social_network} = req.query;
    let errors = [];
    let msgErrors = {msg:''};
        if(!Validation.isNumber(id_social_network)){
            errors.push({id_social_network:'id_social_network invalid'});
            msgErrors.msg='id_social_network invalid';
        }
        if(errors.length===0){
            try{
            let detailInfluencer = await InfluencerModel.detailInfluencer({id_user,id_social_network});
            console.log(detailInfluencer)
                res.status(200).send(detailInfluencer);
            }catch(e){
                console.log(e)
                res.status(500).send('ocorreu um erro');
            }
        }
} 

//list influencer
exports.searchInfluencer = async (req,res)=>{
    let {search} = req.query;
    let errors = [];
    let msgErrors = {msg:''};
    const LIMIT =40;
    if(!Validation.minLength(search,1)){
        errors.push('o campo está vazio');
        msgErrors.msg = 'o campo está vazio';
    }
 
    if(errors.length===0){
        let listInfluencers = await searchModel.searchInfluencer({search,limit:LIMIT});
        console.log(listInfluencers)
        res.status(200).send(listInfluencers)
    }
 
}  