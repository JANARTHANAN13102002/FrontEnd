const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text1,text2;

// For String 
    // Array sort()
        // console.log(fruits.sort()); // O/P ---> [ 'Apple', 'Banana', 'Mango', 'Orange' ]

    // Array reverse()
        // console.log(fruits.reverse()); // O/P ---> [ 'Orange', 'Mango', 'Banana', 'Apple' ]

    // Array toSorted()
        // console.log(fruits.toSorted()); // O/P ---> [ 'Apple', 'Banana', 'Mango', 'Orange' ]

    // Array toReversed()  --> it will reverse the order and print
        // console.log(fruits.toReversed()); // O/P --> [ 'Mango', 'Apple', 'Orange', 'Banana' ]


//Numeric Sort
    // Ascending Order
        // const points = [40, 100, 1, 5, 25, 10];
        // text1 = points.sort(function(a, b){return a - b});
        // console.log(text1); // O/P ---> [ 1, 5, 10, 25, 40, 100 ]

    // Descending Order
        // text1 = points.sort(function(a, b){return b - a});
        // console.log(text1); // O/P --> [ 100, 40, 25, 10, 5, 1 ]


// Object Arrays Sorting

    // const cars = [
    //     {type:"Volvo", year:2016},
    //     {type:"Saab", year:2001},
    //     {type:"BMW", year:2010}
    // ];

    // Ascending Order by Years
        // text1 = cars.sort(function(a,b) {return a.year - b.year});
        // console.log(text1);  // O/P --> [ { type: 'Saab', year: 2001 }, { type: 'BMW', year: 2010 }, { type: 'Volvo', year: 2016 } ]
    
    // Descending Order by Years
        // text1 = cars.sort(function(a,b) {return b.year - a.year});
        // console.log(text1);  // O/P ---> [ { type: 'Volvo', year: 2016 }, { type: 'BMW', year: 2010 },{ type: 'Saab', year: 2001 }]

    // Sorting by Names
        // text1 = cars.sort(function(a, b){
        //         let x = a.type.toLowerCase();
        //         let y = b.type.toLowerCase();
        //         if (x < y) {return -1;}
        //         if (x > y) {return 1;}
        //         return 0;
        //     });
        // console.log(text1); // O/P ---> [{ type: 'BMW', year: 2010 },{ type: 'Saab', year: 2001 },{ type: 'Volvo', year: 2016 }]

        