
export default class Validation{
    static minLength=(value,minLength)=>{
        let regValue = new RegExp("\\w{"+minLength+",}",'g');
        if(regValue.test(value)){
            return true;
        }else{
            return false;
        }
    }
    static emailValid=(email)=>{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return true;
        }else{
            return false;
        }
    } 
    static maxLength=(value,maxLength)=>{
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
    
    static equalPassword = (password,confirmPassword)=>{
        if(password===confirmPassword){
            return true;
        }else{
            return false;
        }
    }
    static dateOfBirthValid= (date)=>{
       date= date.split('/');
       console.log('spit')
       console.log(date)
        date = date.reverse();
        date = date.join('-');
console.log(date)
console.log('date')
    let regDate = new RegExp(/^\d{4}-\d{2}-\d{2}$/,'g')
    if(/^\d{4}-\d{2}-\d{2}$/.test(date)){
        return true;
    }else{
        return false;
    }
}
    static country =(country)=>{
        let result =false; 
        switch(country){
            case'BRA':
            result =true;
            case 'USA':
            result= true;
        }
        return result;
    } 
} 