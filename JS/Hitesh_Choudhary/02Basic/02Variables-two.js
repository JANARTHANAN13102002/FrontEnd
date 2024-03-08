

const uid = "1"
var firstname = "JANARTHANAN";
var lastname = "B";
var age = 22;
var email = "janarthanans2002@gmail.com";
var countryname = "India";
var statename = "Tamil Nadu";
var LoggedInCount = 0;
var password = "12345";
var confirmpassword = "12345";
var isLoggedInFromGoogle=false;
var isLoggedInFromFacebook = false;
var isLoggedInFromGithub = false;

// fullname = prompt("Enter Your Name : "); --> take input from user


console.log(`
    Unique Id : ${uid}
    UserName : ${firstname} ${lastname}
    Age : ${age}
    Email : ${email}
    Country Name : ${countryname}
    State Name : ${statename}
    Logged In Count : ${LoggedInCount}
    Password : ${password}
    LogIn From Google : ${isLoggedInFromGoogle}
    LogIn From FaceBook : ${isLoggedInFromFacebook}
    LogIn From Github : ${isLoggedInFromGithub}
`)
