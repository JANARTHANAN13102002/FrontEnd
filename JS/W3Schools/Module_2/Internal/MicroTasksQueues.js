    // let timer = setTimeout(() => {
    //     console.log(1)
    // },0);

    // console.log("First");
    // console.log("Second");

    // O/P --> First
    //         Second
    //         1

    // Because the callback Function in setTimeout is a macro task Queue and Asynchronous .



    // let timer = setTimeout(() => {
    //     console.log(1)
    // },10);

    // let timer2 = setTimeout(() => {
    //     console.log(3)
    // },0);

    // console.log("First");
    // console.log("Second");

    // O/P -- > First
    //         Second
    //         3
    //         1

        // 3 is come before 1 is because of the time it take to print  



    // let timer = setTimeout(() => {
    //     console.log(1)
    // },0);

    // Promise.resolve(3).then((v)=>{
    //     console.log(v)
    // })

    // console.log("First");
    // console.log("Second");

    // O/P --> First
    //         Second
    //         3
    //         1

/*
    Because then(), catch(), finally() are micro tasks
    the callback in setTimeout is a macro task.
    Micro >>>>>> Macro. Why ??
*/


/* 
Here Comes Event Loop
        * Event Lopp will start its Executes the first synchronous task in the current scope.
        * In the Below Program Line Number 44 is the First sync task in the Program and perform Start from (Line no 44)
        * And Ends with the Micro Task Queue 
        * First js Engine will check the synchronous task queue and complete it and it will check the micro task queue and complete the task and finally it will chack and complete the Macro Task Queue
        *  
*/

/*
Example 1 :

    let timer = setTimeout(() => { --> Third Printed because of Macro task
        console.log(1)
    },0);

    Promise.resolve(3).then((v)=>{ --> Third Printed because of Micro task
        console.log(v)
    })

    console.log("First"); --> First Print because of synchronous task
    console.log("Second"); --> Second Print because of synchronous task


    O/P --> First
            Second
            3
            1


Example 2 : 

    let timer = setTimeout(() => {
        Promise.resolve("Print").then((v)=>{ --> Lastly Printed because of Micro Task in Macro
            console.log(v);
        })
        console.log(1);  ---> Fourth Printed because of synchronous task in Macro Task
    },0);

    Promise.resolve(3).then((v)=>{
        console.log(v)  ---> Third Printed because of Micro task
    })

    console.log("First"); --> First Print because of synchronous task
    console.log("Second"); --> Second Print because of synchronous task

    O/P ---> First
            Second
            3
            1
            Print 

Example 3 : 

    let timer = setTimeout(() => {
    Promise.resolve("Print").then((v)=>{  --> Fifth Printed because of Micro Task in Macro
        console.log(v);
    })
    setTimeout( () => { console.log(5) } , 0 );  ---> --> Lastly Printed because of Macro Task in Macro
    console.log(1);  ---> Fourth Printed because of synchronous task in Macro Task
    },0);

    Promise.resolve(3).then((v)=>{
        console.log(v)   ---> Third Printed because of Micro task
    })

    console.log("First");  --> First Print because of synchronous task
    console.log("Second");   --> Second Print because of synchronous task

    O/P ---->   First
                Second
                3
                1
                Print
                5





*/

