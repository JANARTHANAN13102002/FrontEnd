// Synchronous

        // let pizza;
        // function orderPizza() {
        //     console.log("Order Pizza");

        //     setTimeout(()=>{
        //         pizza = "🍕";
        //     })

        //     console.log("Pizza was Ordered");
        // }
        // orderPizza();
        // console.log(`Eat ${pizza}`);

        // O/P --> Order Pizza
        //         Pizza was Ordered
        //         Eat undefined


// Asynchronous

    // let pizza;
    // function orderPizza() {
    //     console.log("Order Pizza");

    //     setTimeout(()=>{
    //         pizza = "🍕";
    //         console.log(`${pizza} is Ready`);
    //     })

    //     console.log("Pizza was Ordered");
    // }
    // orderPizza();
    // console.log("Call Me");
    // console.log(`Eat ${pizza}`);

    // O/P --> Order Pizza
    //         Pizza was Ordered
    //         Call Me
    //         Eat undefined
    //         🍕 is Ready


// Callback Functions

    // function OrderPizza(Pizza_Callback) {
    //     setTimeout(() => {
    //         pizza = '🍕';
    //         Pizza_Callback(pizza);
    //     },2000)
    // }
    // function PizzaReady() {
    //     console.log(`Eat the ${pizza}`);
    // }
    // OrderPizza(PizzaReady);
    // console.log("Call ME");

    // O/P --> Call ME
    //         Eat the 🍕  --> two min later


// Example : 
    // function first() {
    //     console.log("First");
    // }

    // function second(callback) {
    //     setTimeout( () => {
    //         console.log("second");
    //         callback();
    //     },2000);
    // }

    // function third() {
    //     console.log("Third");
    // }

    // first();
    // second(third);

    // O/P --> First
    //         second
    //         Third



//Example : 
    // function callbackhell() {
    //     setTimeout (() => {
    //         const data = {user:"jana"};
    //         console.log(data);
    //         setTimeout(() => {
    //             console.log("Data has been Updated");
    //         },5000)
    //     },500)
    // }

    // callbackhell();

    // O/P --> { user: 'jana' }
    //         Data has been Updated