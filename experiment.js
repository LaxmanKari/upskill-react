//onst lodash = require("lodash");

import isEqual from "lodash"


let a = function (){} ;

console.log(typeof(a));

let any=10; 
function getList(){
   any; 
}

console.log(getList());

let user = []; 
user[0] = "laxman";
user["mj"]="kalyan"
console.log(user[0]);

let userObj = {
   kari: "laxman",
   "mj": "kalyan",
   0: 12
}





let user1 = {
   name: "Kari Laxman",
   phnNum: 891989,

}

let user2 = {
   name: "Kari Laxman",
   phnNum: 891989,
 
}

let user3 = user1;

console.log(isEqual.isEqual(user1, user2))
console.log(user1 === user2)



//LODASH LIBRARY which has isEqual() which works perfectly in our case 