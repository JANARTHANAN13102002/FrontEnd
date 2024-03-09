// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt);

// const new1 = numbers.map(myfunction);
// function myfunction(num) {
//     return num * 10;
// }


// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   const arr = persons.map(getFullName);  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }


// console.log(newArr);
// console.log(new1);
// console.log(arr);


// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map(num => num * num);
// console.log(squared);



// Map in W3SCHOOLS 
    // Passing an Array to new Map()
    // const map = new Map([
    //     ['apple', 500],
    //     ["oranges",200],
    //     ["bananas", 300]
    // ]);
    // console.log(map);

    // Create a Map and use Map.set() 
    // const map = new Map();
    // map.set('apple',500);
    // map.set('oranges',100);
    // map.set('bananas',200);
    // console.log(map);

// Map.get()

    // const map = new Map([
    //     ['apple', 500],
    //     ["oranges",200],
    //     ["bananas", 300]
    // ]);
    // console.log(map.get("apple")); // 500

// Map.delete() --> The delete() method removes a Map element
    
    // const map = new Map([
    //     ['apple', 500],
    //     ["oranges",200],
    //     ["bananas", 300]
    // ]);
    // map.delete("apple");
    // console.log(map);

// Map.clear() --> The clear() method removes all the elements

// Map.has() --> The has() method returns true if a key exists in a Map

    // const map = new Map([
    //     ['apple', 500],
    //     ["oranges",200],
    //     ["bananas", 300]
    // ]);
    // console.log(map.has("apple"));

// Maps are Objects
    // const map = new Map([
    //     ['apple', 500],
    //     ["oranges",200],
    //     ["bananas", 300]
    // ]);
    // console.log(typeof map); --> Object
    // console.log(map instanceof Map); -->True

// Map.forEach()
    
    // let text="";
    // const map = new Map([
    //     ['apple', 500],
    //     ["oranges",200],
    //     ["bananas", 300]
    // ]);
    // map.forEach(function (value, key)
    // {
    //     console.log(key+" "+value);
    // })

// Map.entries()
    // const map = new Map([
    //     ['apple', 500],
    //     ["oranges",200],
    //     ["bananas", 300]
    // ]);

    // const arr = map.entries();
    // for(const x of arr)
    //     console.log(x);

    // o/p --> [ 'apple', 500 ]
    //         [ 'oranges', 200 ]
    //         [ 'bananas', 300 ]


// Map.keys()  
    const map = new Map([
        ['apple', 500],
        ["oranges",200],
        ["bananas", 300]
    ]);
    // for(const x of map.keys())
    //     console.log(x);

    // o/p --> apple
    //         oranges
    //         bananas

// Map.values()
    // for(const x of map.values())
    //     console.log(x);
    
    // o/p --> 500
    //         200
    //         300



// Objects as Keys
    
    // const apples = {name: 'Apples'};
    // const bananas = {name: 'Bananas'};
    // const oranges = {name: 'Oranges'};
    // const fruits = new Map();
    // fruits.set(apples, 500); // ==> (Object , Value)
    // fruits.set(bananas, 300);
    // fruits.set(oranges, 200);
    // console.log(fruits);

    // for(let x of fruits.keys()) {
    //     console.log(x);
    // }
