// const name = 'jana';
// const age =22;
// console.log(`I am ${name} and my age is ${age}`);

// String Operations
    // const s ="Hello World";
    // console.log(s.length);
    // console.log(s.toUpperCase());
    // console.log(s.toLowerCase());

    // console.log(s.substring(0,5)); // substring(start,end)
    // console.log(s.substring(0,5).toUpperCase());

    // const v = "HTML,CSS,JS,REACT JS";
    // console.log(v.split(','));



//Arrays 

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits=['Apples','Oranges'];
fruits.push('Mango')  // Add at the last 
fruits.unshift('Grapes'); // Add at the First
fruits.pop(); // Remove the Last element

console.log(Array.isArray(fruits)); // check if any element is present or not
console.log(fruits.indexOf('Grapes')); // give the index value of the element
console.log(fruits);

const mixed_types = [10 , true,false,'apple'];
console.log(mixed_types);




