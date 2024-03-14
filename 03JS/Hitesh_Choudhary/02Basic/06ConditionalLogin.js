// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from FaceBook

console.log("Hi");

var LoggedInFromEmail = true;
var LoggedInFromGoogle = true;
var LoggedInFromFacebook = true;

if(LoggedInFromEmail || LoggedInFromFacebook || LoggedInFromGoogle) {
    console.log("You Have been LoggedIn");
} else {
    console.log("You Have not been LoggIn");
}
