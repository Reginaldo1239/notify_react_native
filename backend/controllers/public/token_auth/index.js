// atualiza a tabela code_auth_social_network 

const cryptografy = require('../../../global/cryptography');
const TokenAuth = require('../../../models/public/token_auth');
const Validation  = require('../../../global/validation');
exports.update_code=async (req,res)=>{
    let {code,state} = req.body;

  let {id_code_social_network,social_network}  = await cryptografy.decript(state)[0];
    if(Validation.isString(id_code_social_network)){

    }
 

 
    res.status(200).send('ok')
}
