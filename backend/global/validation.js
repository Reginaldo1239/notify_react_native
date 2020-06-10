exports.emailValid=(email)=>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }else{
        return false;
    }
}
exports.minLength=(value,minLength)=>{
    let regValue = new RegExp("\\w{"+minLength+",}",'g');
    if(regValue.test(value)){
        return true;
    }else{
        return false;
    }
} 
exports.maxLength=(value,maxLength)=>{
    if(typeof value=='string'){
        if(value.length<=maxLength){
            return true
        }else{
            return false;
        }
    }else{
        return false;
    }
} 
exports.dateOfBirthValid= (date)=>{
    let regDate = new RegExp(/^\d{4}-\d{2}-\d{2}$/,'g')
    if(/^\d{4}-\d{2}-\d{2}$/.test(date)){
        return true;
    }else{
        return false;
    }
}
exports.minSegurePassword = ()=>{
    
}
exports.equalPassword = (password,confirmPassword)=>{
    if(password===confirmPassword){
        return true;
    }else{
        return false;
    }
}