/*

Pure Functions

    Why write Pure Function ?
    1) Clean Code
    2) Easy to Test
    3) Easy to debug
    4) Decoupled and Independent
    5) Could be added to Your utility functions

    Rules for Pure Functions : 
    1) The same input Always gives same output 
    2) No side Effects

*/


// A pure function should have at least one parameter
// Otherwise, it is the same as a constant because they can only work with thier input


// Example For Pure Function

    const add = (x,y) => {
        return x+y;
    };
    console.log(add(10,5));

    const name = (firstname,lastname) => {
        return `${firstname} ${lastname}`;
    }
    console.log(name("Janarthanan","B"));

// Example For Not a Pure Function
    
    let z =20;
    const opp = (x,y) => {
        return x+y+z;
    }
    console.log(opp(52,58));
    // It is not a pure function because when we add the numbers th enum is depended on Z, if Z value changes then the rule 1 will be Breaked.


// Impure Functions Examples

// Example 1 :
    // let x = 1;
    // const inc = () => x += 1;
    // console.log(inc());
    // console.log(x);

// Example 2 :
    // const array = [1,2,3];
    // const push = (array,num) => {
    //     array.push(num);
    //     return array;
    // }
    // console.log(push(array,4));
    // console.log(array);

// Refactored Examples 
    // Example 1 :
        // const num1 = (num) => {
        //     return num += 1;
        // }
        // console.log(num1(x));
        // console.log(x);
