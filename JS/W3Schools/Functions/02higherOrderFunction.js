// Three Ways :
    // Type 1: function call as parameter and return or perform any action
    // Type 2: a function call get normal parameters and can return a function
    // Type 3: get a function and it can retur a function
 
// Type 1 : 
    // let n;
    // const repeat = (n ,fun) => {
    //     for(let i=0;i<n;i++)
    //         fun(i);
    // }
    // repeat(10,console.log);

// Type 2 :
    // const sqaure = x => x*x;
    // console.log(sqaure(15896740));

    // const power = (y) => {
    //     return (x) => {
    //         let a = x;
    //         for(let i = 1; i<y ;i++){
    //             a = a * x;
    //         }
    //         return a;
    //     };
    // };

    // const square = power(2);
    // const cube = power(3);
    // console.log(square(10)); --> O/P 100
    // console.log(cube(10)); --> O/P 1000
    // console.log(power(3)(10)); --> O/P 1000

// Type 3 :   

    // const memoize = (fn) => {
    //     const cache = {};
    //     return (val) => {
    //         if(cache[val])
    //             return cache[val];
    //         result = fn(val)
    //         cache[val] = result;
    //         return result;
    //     };
    // };

    // const square = (n) => {
    //     console.log(`Calculating Square for ${n}`);
    //     return n*n;
    // };

    // const mesquare = memoize(square);
    // console.log(mesquare(10));
    // console.log(mesquare(9));
    // console.log(mesquare(10));