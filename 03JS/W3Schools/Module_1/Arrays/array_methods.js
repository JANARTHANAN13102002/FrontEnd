const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text1,text2;


// Array length
console.log("Array Size : "+fruits.length); // O/P --> 4

// Array toString()
let text = fruits.toString();
console.log(text); // O/P --> Banana,Orange,Apple,Mango

// Array at()
text = fruits.at(2);
text1 = fruits[2];
console.log(text +" "+text1); // O/P --> Apple Apple

// Array Join()
text = fruits.join("*");
console.log(text); // O/P --> Banana*Orange*Apple*Mango

// Pop() and Push()
fruits.push("Grapes");
console.log(fruits); // O/P --> [ 'Banana', 'Orange', 'Apple', 'Mango', 'Grapes' ] 
fruits.pop();
console.log(fruits); // O/P --> [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Array Shift()
text = fruits.shift();
console.log("Removed Element : "+text+" , Array : "+fruits); // O/P --> Removed Element : Banana , Array : Orange,Apple,Mango
text1 = fruits.unshift("Banana");
console.log(text1+" "+fruits); // O/P --> 4 Banana,Orange,Apple,Mango

// Array delete()
    //delete fruits[0];
    console.log(fruits); // O/P ---> [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]

// Array Concat()   
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

console.log(arr1.concat(arr2)); // O/P --> [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
console.log(arr1.concat(arr2, arr3)); // O/P --> [ 'Cecilie', 'Lone','Emil', 'Tobias','Linus','Robin','Morgan' ]


// Array copyWithin()
    // text = fruits.copyWithin(2,0); 
    // console.log(text); // O/P ---> [ 'Banana', 'Orange', 'Banana', 'Orange' ]

    // const fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    // text = fruit.copyWithin(2,0,2);
    // console.log(text); // O/P --> [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]

// Array flat()
    // const nums= [[1,2],[3,4],[5,6],[7,8],[9,10]];
    // text = nums.flat();
    // console.log(text);  // O/P --> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Array Splice() 

//add new items to an array
    // fruits.splice(2,0,"Lemon","Kiwi");
    // console.log(fruits); // O/P ---> [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

// Remove Elements 
    // fruits.splice(0,2);
    // console.log(fruits); // O/P --> [ 'Apple', 'Mango' ]


// Array toSpliced()
    // const months = ["Jan", "Feb", "Mar", "Apr"];
    // console.log(months.toSpliced(0, 1)); // O/P --> [ 'Feb', 'Mar', 'Apr' ]

// Array slice() --> Create  a new Array and add the Elements in the range
    // text = months.slice(0,2);
    // console.log(text); /// O/P ---> [ 'Jan', 'Feb' ]
