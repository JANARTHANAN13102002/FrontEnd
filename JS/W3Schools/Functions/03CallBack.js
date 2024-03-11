// JavaScript Callbacks Function
    // function dispaly(result) {
    //     console.log(result);
    // }

    // function add(n1,n2,myCallback) {
    //     let sum = n1 + n2;
    //     myCallback(sum);
    // }

    // for(let x = 0 ;x < 10 ;x++)
    //     add(741851,x,dispaly);

// Anonymous Functions In JavaScript
    // let sum = function(x,y) {
    //     return x+y;
    // }
    // console.log(sum(48292956,895652659));

    // (function() {
    //     console.log("Welcome");
    // })();  --> in the above example the function calls autmatically by itself by using ()


    // setTimeout(function(){
    //     console.log("Hello");
    // },2000);



// Recursive Functions In JavaScript

    function countDown(num) {
        if(num == 0) return ;
        else{
            console.log(num);
            countDown(num-1);
        }
    }
    countDown(10);
