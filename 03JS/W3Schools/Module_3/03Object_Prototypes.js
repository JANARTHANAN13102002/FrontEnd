// Example 1:

    // function person(firstname,lastname,age) {
    //     this.firstname = firstname;
    //     this.lastname = lastname;
    //     this.age = age;
    // }

    // const myFather = new person("Baskaran","V",56);
    // const myMother = new person("Santhamani","v",50);

    // console.log(myFather.age);
    // console.log(myMother.firstname);

    

// Example 2:

// We also learned that you can not add a new property to an existing object constructor:
// To add a new property to a constructor, you must add it to the constructor function:
        // function person(firstname,lastname,age) {
        //     this.firstname = firstname;
        //     this.lastname = lastname;
        //     this.age = age;
        // }

        // const myFather = new person("Baskaran","V",56);
        // const myMother = new person("Santhamani","v",50);

        // person.nationality = "English";
        // console.log(`My Father is Nationality is ${myFather.nationality}`);

        // O/P --> My Father is Nationality is undefined


// Example 3:

/*

    Prototype Inheritance
    All JavaScript objects inherit properties and methods from a prototype:

    Date objects inherit from Date.prototype
    Array objects inherit from Array.prototype
    Person objects inherit from Person.prototype

*/

// Using the prototype Property

    // function person(first, last, age, eyecolor) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.eyeColor = eyecolor;
    // }
  
    // const myFather = new person("Baskaran","V",56);
    // const myMother = new person("Santhamani","v",50);

    // person.prototype.nationality = "English";

    // console.log(myFather.nationality);
    // console.log(myMother.nationality);

    // O/P --> English
    //         English

    // by using prototype we can add a new property to object constructors

// Example 4:

    // The JavaScript prototype property also allows you to add new methods to objects constructors:

    // function person(first, last, age, eyecolor) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.eyeColor = eyecolor;
    // }
  
    // const myFather = new person("Baskaran","V",56);
    // const myMother = new person("Santhamani","v",50);

    // person.prototype.fullname = function() {
    //     return (`${this.firstName} ${this.lastName}`);
    // }

    // console.log(myFather.fullname()); // --> Baskaran V