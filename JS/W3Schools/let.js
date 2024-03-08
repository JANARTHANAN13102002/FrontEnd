// Block Scope  ----> let and const
/*
    {
        let x=2;
    }
    console.log(x);

    O/P -- > ReferenceError: x is not defined
*/

// Global Scope -----> var

/*
    {
        var x = 2;
    }
    console.log(x);

    O/P ----> 2
*/

// Cannot be Redeclared ---> let and const on the same Block Scope

// Example
    // var x = 10;
    // Here x is 10

    // {
    // var x = 2;
    // Here x is 2
    // }

    // Here x is 2

//Example
    // let x = 10;
    // Here x is 10

    // {
    // let x = 2;
    // Here x is 2
    // }

    // Here x is 10

// var is like a staic Keyword, if the value is changed in any part of the program it will same.
// let is like a local variable

