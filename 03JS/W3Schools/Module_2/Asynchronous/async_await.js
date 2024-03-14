// Example 1 :

    // async function pass() {
    //     console.log(1)
    //     const user = await fetch("https://jsonplaceholder.typicode.com/todos/") ;
    //     console.log(user);
    //     console.log(2);
    // }

    // pass();


// Example 2 : 

    // async function pass() {
    //     setTimeout(() => {
    //         console.log("Hello Jana");
    //     },2000);

    //     Promise.resolve("Hi Jana"). then((Data)=> {
    //         console.log(Data);
    //     })

    //     console.log("1");
    // }
    // pass();

    // O/P --> 1
    //         Hi Jana
    //         Hello Jana

    
// Example 3 :

    // async function pass() {
    //     try{
    //         const user = await fetch("https://jsonplaceholder.typicode.com/todos/") ;
    //         const data = await use.json();
    //         console.log(data);
    //     }catch(err) {
    //         console.log("I am Waiting");
    //     }
    // }
    // pass();

// Example 4 :  