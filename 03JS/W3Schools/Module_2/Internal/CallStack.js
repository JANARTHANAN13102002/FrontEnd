// CallStcak 

    // It is same as the Normal Stack
    // Last In First Out


// Example 1 :

    // function first() {
    //     console.log("First...");
    // }

    // function second() {
    //     console.log("Second...");
    // }

    // function third() {
    //     console.log("Third...");
    // }

    // first();
    // second();
    // third();

    
// Explanation
    // Here after call of the first() it will perform and it will pop out
    // then second() is called and it will perfoem and pop out
    // then third() is called and it will perfoem and pop out


// Example 2 :

    // function first() {
    //     console.log("First...");
    //     second();
    // }
    // function second() {
    //     console.log("Second...");
    //     third();
    // }
    // function third () {
    //     console.log("Third...");
    // }

    // first();

    // Here it will load first in 1st and then it will call second and the second() will call third and third() will poped out, then second() will poped out and then in last first() will be poped out.



// Example 3 :

    // console.log("message");
    // logger();
    // console.log(1);

    // function logger() {
    //     console.log(2);
    //     finish();
    //     console.log(3);
    //     function finish() {
    //         console.log("Finish");
    //     }
    // }

    // O/P --> message
    //         2
    //         Finish
    //         3
    //         1