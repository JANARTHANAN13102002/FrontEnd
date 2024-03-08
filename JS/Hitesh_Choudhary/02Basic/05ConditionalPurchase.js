// User is only allowed to make a purchase when he is :
// logged in
// email verified
// cardinfo - Valid
// If any one is missing, Stop purchase

var isEmailVerified = true;
var cardinfo = true;
var isLoggedIn = true;

if(isEmailVerified && cardinfo && isLoggedIn) {
    console.log("Allow User  to make a Purchase");
} else {
    console.log("Your Not allowed to do Purchase");
}
