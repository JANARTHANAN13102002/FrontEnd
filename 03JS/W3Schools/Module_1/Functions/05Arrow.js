const orders = [
    {id:1,item:"smartPhone"},
    {id:2,item:"Maagi"},
    {id:3,item:"Phone"}
];

let result = orders.find((order) => {
    return order.item === "Maagi";
})

let result1 = orders.findIndex((order) => {
    return order.item === "Maagi";
})

console.log(result);
console.log(result1);