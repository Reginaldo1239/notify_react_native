const Validation  = require('../../../global/validation');
const searchModel = require('../../../models/client/search');
exports.searchInfluencer = async (req,res)=>{
    console.log('search')
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