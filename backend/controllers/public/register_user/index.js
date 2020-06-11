const Validation = require('../../../global/Validation');
const RegisterUserModel  = require('../../../models/public/register_user');
const User = require('../../../global/user');
const Cryptography  = require('../../../global/cryptography');
exports.registerUser= async (req,res)=>{
    let {name,email,date_of_birth,country,password,confirm_password} = req.body;
    let erros = [];
    let msgErro= {msg:''};
    if(!Validation.minLength(name,2)){
        msgErro.msg="name is empty";
        erros.push({name:'name is empty'});
    }else if(!Validation.maxLength(name,70)){
        msgErro.msg=" name accepts a maximum of 70 characters";
        erros.push({name:'accepts a maximum of 70 characters'});
    }
    if(!Validation.emailValid(email)){
        msgErro.msg="email is invalid";
        erros.push({email:'is invalid'});
    }else if(await User.emailIsRegister(email)){
        msgErro.msg="email is registered";
        erros.push({email:'email is registered'});
    }  
    console.log(await User.emailIsRegister(email))
    if(!Validation.dateOfBirthValid(date_of_birth)){
        msgErro.msg="date_of_birth is invalid";
        erros.push({date_of_birth:' date_of_birth is invalid'});
    }
    if(!Validation.equalPassword(password,confirm_password)){
        msgErro.msg="password no equal";
        erros.push({password:'password no equal'});
    }
    console.log(erros)
    if(erros.length==0){
       try{
     password = await  Cryptography.generateHash(password)
        let resultRegister = await RegisterUserModel.register_user({name,email,date_of_birth,country,password});
                if(resultRegister.affectedRows==1){
                    res.status(200).send(resultRegister);
                }else{ 
                    res.status(500).send({msg:'ocorreu um erro tente novamente'});
                }
    }catch(e){
        console.log(e)
            res.status(500).send({msg:'ocorreu um erro tente novamente'});
    }
    }else{
        res.status(400).send(msgErro);
    }

    
} 