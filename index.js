import userName from "./name.js";
import userLastName from "./lastName.js"
import userPhone from "./phone.js"

function userData(name, lastName, phone){
    console.log(userName(name) + " " + userLastName(lastName) + " " + userPhone(phone));
}

userData("Ivan", "Ivanov", 523452345);