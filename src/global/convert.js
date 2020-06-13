
export default class Convert {

    static datePickerVisibleToClient =(obj)=>{
        let date = JSON.stringify(obj);
        date= date.slice(1,11);
        date =date.split('-');
        date = date.reverse();
        date = date.join('/');
    
        return date;
    }
} 