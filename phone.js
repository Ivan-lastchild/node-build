const phone = function (number) {
    if(typeof number ===  "number"){
        return `${number}`
    }
    
    return "Number is not correct";
};


export default phone;