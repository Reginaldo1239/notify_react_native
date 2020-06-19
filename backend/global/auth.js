var jwt = require('jsonwebtoken');
exports.auth =(req,res,next)=>{
    let {token} = req.headers;
    jwt.verify(token, 'privatssseKey' , { algorithms: ['HS512'] }, function (err, payload) {
        if(err){
            console.log(err)
            res.status(401).send({msg:'access denied'});
        }else{
            req.headers.id_user= payload.id_user;
            next();
        }
    });
   
}   
 