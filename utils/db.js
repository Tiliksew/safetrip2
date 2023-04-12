exports. getDecimal = (value) =>{
    if (typeof value !== 'undefined') {
       return parseFloat(value.toString());
    }
    return value;
}
exports.isDecimal = (x) => {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            false
        }
        else {
            true
        }
    
    } else {
        true
    }
}
exports.isInteger = (x) => {

    // check if the passed value is a number
    if(typeof x == 'number' && !isNaN(x)){
    
        // check if it is integer
        if (Number.isInteger(x)) {
            true
        }
        else {
            false
        }
    
    } else {
        true
    }
}