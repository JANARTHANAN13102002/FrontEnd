const nums = [45, 4, 9, 16, 25];
let text;

/*
Array ForEach:
--------------
    text = nums.forEach(myfunction);
    function myfunction(value) {
        console.log(`${value}`);
    }

    O/P --> 45
            4
            9
            16
            25
*/

/* 
Array map():
------------

    text = nums.map(myfun);
    function myfun(value){
        return value * 2 ;
    }
    console.log(text); // O/P --> [ 90, 8, 18, 32, 50 ]

*/

/* 
Array flatMap():
----------------

    text = nums.flatMap((x) => x*2);
    console.log(text); // O/P --> [ 90, 8, 18, 32, 50 ]

*/

/*
Array filter():
---------------
    text = nums.filter(fun);
    function fun(value) {
        return value > 18 ;
    }
    console.log(text); // O/P ---> [ 45, 25 ]

*/

/*
Array reduce()
--------------
    text = nums.reduce(fun);
    function fun(total,value) {
        return total + value;
    }
    console.log(text); // O/P ---> 99
*/

/*
Array every()  --> The every() method checks if all array values pass a test.
-------------
    text = nums.every(fun);
    function fun(value) {
        return value > 18 ;
    }
    console.log(text); // O/P --> false (if Every element is greater then 18 then it will return true)
*/


/*
Array some()
------------
    text = nums.some(fun);
    function fun(value) {
        return value > 18 ;
    }
    console.log(text); // O/P --> true
*/









    