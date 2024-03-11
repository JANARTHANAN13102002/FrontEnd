const person = {
    firstname : "Janarthanan",
    lastname : "B",
    age : 22,
    isAlive : true,
    parent : {
        father : "Appa",
        Mother : "Amma"
    },
    fullname : function(){
        return `${this.firstname} +' '+${lastname}`
    },
    favColor : "blue"
};

// Assigning Default values
    // const {firstname , lastname} = person;
    // console.log(firstname +" "+lastname);

// Changing default values
    
    // const { firstname , lastname , favColor = 'red'} = person;
    // console.log(firstname+" "+lastname +" "+favColor); // jana B red, if favColor is not in person.

    // const { firstname , lastname , favColor = 'red'} = person;
    // console.log(firstname+" "+lastname +" "+favColor); // jana B blue, if favColor is defined in person it will give that only.

    // const{oldname : newname, properties} = Object --> Syntax
    // const { firstname : myfirstname, lastname} = person;
    // console.log(myfirstname+" "+lastname); // To change the key name use this

// Task #1
    // const {lastname:mylastname,clg = "BIT"} = person;
    // console.log(mylastname+" "+clg);


// Destructuring without defining
    // let favNum1, favNum2 ;
    // ({favNum1,favNum2, ...Othervalues} = { // rest Operator --> ...
    //     favNum1 : 1,
    //     favNum2 : 2,
    //     favNum3 : 3,
    //     favNum4 : 4,
    //     favNum5 : 5
    // })
    // console.log(favNum1,favNum2,Othervalues);   // O/P --> 1 2 { favNum3: 3, favNum4: 4, favNum5: 5 }

    // Rest Operators
        // const {firstname , ...remainingPersonDetails} = person;
        // console.log(firstname,remainingPersonDetails);

// Object Destructuring in Functions

    // display(person);
    // function display({firstname,lastname}) {
    //     console.log(`My Name is ${firstname} ${lastname}`); //My Name is Janarthanan B
    // }