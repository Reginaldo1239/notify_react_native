const Validation = require('../../../global/Validation');
const RegisterUserModel  = require('../../../models/public/register_user');
const User = require('../../../global/user');
const Cryptography  = require('../../../global/cryptography');

exports.registerUser= async (req,res)=>{
    // type_profile  = influencer or follower
    let {name,email,date_of_birth,password,type_profile,confirm_password} = req.body;
    let erros = []; 
    let msgErro= {msg:''};
    let existProfile =     await User.getInfoUser(email);
        if(existProfile.length>0){
            existProfile.map((profile,index)=>{
                //verify if user has type_profile equal value  follower or influencer 
                if(profile.type_profile==type_profile){    
                    msgErro.msg='email is registered';
                    erros.push({emal:'email is registered'})
                }
            })  
        }
   
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
    }
    if(!Validation.typeProfileUserValid(type_profile)){
        msgErro.msg ='type profile user invalid';
        erros.push({type:'type profile user invalid'});
    }

    if(!Validation.dateOfBirthValid(date_of_birth)){
        msgErro.msg="date_of_birth is invalid"; 
        erros.push({date_of_birth:' date_of_birth is invalid'});
    }
    if(!Validation.equalPassword(password,confirm_password)){
        msgErro.msg="password no equal";
        erros.push({password:'password no equal'});
    }
   /* console.log('erros')
    console.log(erros)
    console.log(type_profile)
    console.log(existProfile)*/
    if(erros.length==0&&existProfile.length===0){
       try{
     password = await  Cryptography.generateHash(password)
        let resultRegister = await RegisterUserModel.register_user({name,email,date_of_birth,password});
            console.log(resultRegister)   
        if(resultRegister.affectedRows==1){
            let registerTypeProfile = await RegisterUserModel.registerTypeProfile({
                id_user:resultRegister.insertId,
                type_profile
        })
                    if(registerTypeProfile.affectedRows==1){
                        res.status(200).send(resultRegister);
                    }
                    
                }else{ 
                    console.log('500')
                    res.status(500).send({msg:'ocorreu um erro tente novamente'});
                }
    }catch(e){
        console.log(e)
            res.status(500).send({msg:'ocorreu um erro tente novamente'});
    }
    }else if(existProfile.length>0 && erros.length==0){
        try{
           let registerTypeProfile = await RegisterUserModel.registerTypeProfile({
                    id_user:existProfile[0].id_user,
                    type_profile
            })
           // i email is registered and was add  o type of profile user
            registerTypeProfile.email=true;
            res.status(200).send(registerTypeProfile);
        }catch(e){
            console.log(e)
            res.status(500).send({msg:'ocorreu um erro tente novamente'});
        }
            
    }else{
        console.log(msgErro)
        console.log('400')
        res.status(400).send(msgErro);
    }

    
} 