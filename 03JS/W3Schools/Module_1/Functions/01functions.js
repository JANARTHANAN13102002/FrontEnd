    // function myfunction() {
    //     let name ="Janarthanan";
    //     let msg = "Hello " + name + " I'm learning JS";
    //     console.log(msg);
    // }
    // myfunction();


    // function myfunction(name) {
    //     let msg = "Hello " + name + " I'm learning JS";
    //     console.log(msg);
    // }
    // myfunction("Janarthanan");

    // function addNumbers(num1,num2) {
    //     console.log(num1+num2);
    // }
    // addNumbers(100000048519650,85296374196);

    
// Definition, Call, parameters
    // const bf = 100;
    // const lu = 200;
    // const di = 90;

        // function sum(bf,lu,di) /* --> parameter */ {
        //     console.log(`${bf+lu+di}`);
        // }
        // sum(100,200,90); /* ---> Argument */ 


    // using Return 
        // function sum (a,b,c) {
        //     return `${a+b+c}`;
        // }
        // let arr = sum(200,300,100);
        // console.log(arr);

// Arguments
        // If a value is not passed for the arguments, then it will be undefined and the result will be NaN
        // function sum (a,b,c) {
        //     return `${a+b+c}`;
        // }
        // let arr = sum(200,300);
        // console.log(arr);   O/P --> NaN
    
        // function sum (a,b,c) {
        //     console.log(arguments); O/P --> [Arguments] {
        //                                         '0': 200,
        //                                         '1': 300,
        //                                         '2': 52,
        //                                         '3': 58,
        //                                         '4': 74,
        //                                         '5': 85,
        //                                         '6': 96,
        //                                         '7': 25,
        //                                         '8': 36
        //                                     }
        //     return `${a+b+c}`;
        // }
        // let arr = sum(200,300,52,58,74,85,96,25,36);
        // console.log(arr);


        // function sum () {
        //     let total = 0;
        //     for(let i of arguments)
        //         total += i;

        //     return total;
        // }
        // let arr = sum(200,300,52,58,74,85,96,25,36);
        // console.log(arr);