// False Values : 
        // undefined
        // null
        // 0
        // ''
        // NaN

var user = "2"; 
if (2 == user) {
    console.log("Using == to Check");
}

if(2 === user) {
    console.log("Equals");
}

user = '';
if(user) {
    console.log("True");
} 

console.log(2 + "2");
console.log('2' + 2);