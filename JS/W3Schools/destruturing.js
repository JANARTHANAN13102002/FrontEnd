// const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// console.log(car);
// console.log(truck);
// console.log(suv);

//After Destruturing

// const vehicles = ['mustang', 'f-150', 'expedition'];
// const [car, truck, suv] = vehicles;

// console.log(car);
// console.log(truck);
// console.log(suv);


// const vehicles = ['mustang', 'f-150', 'expedition'];
// const [car,, suv] = vehicles; // only two variable is declared and only it will stored the value(f-150 is not stored in any variable)



// function cal(num1,num2) {
//     const add = num1 + num2;
//     const sub = num1 - num2;
//     const mul = num1 * num2;
//     const div = num1 / num2;

//     return [add,sub,mul,div];
// }

// const [add,sub,mul,div] = cal(8,2);
// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(div);


// Destruturing Objects

// const list = {
//     name : "Jana",
//     age:22,
//     Clg : "BIT",
//     Location : "Coimbatore",
//     role : "intern"
// }

// myfunction(list)
// function myfunction({name,age,clg,role}) {
//     console.log(`Name : ${name} 
// Age : ${age}
// Clg : ${clg}
// Role : ${role}`);
// }



// const vehicleOne = {
//     brand: 'Ford',
//     model: 'Mustang',
//     type: 'car',
//     year: 2021, 
//     color: 'red',
//     registration: {
//       city: 'Houston',
//       state: 'Texas',
//       country: 'USA'
//     }
//   }

//   myfunction(vehicleOne)
//   function myfunction({brand, registration : {state}}) {
//         console.log(brand+" "+state);
//   }

