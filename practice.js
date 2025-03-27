//FUNCTIONS
// function helloWorld(name,age){
//     console.log(`My name is ${name},and My age is${age}`);
// }

// helloWorld("Lasya",20);


//ARROW FUNCTIONS

// const add=(a,b)=>a+b;
// console.log(add(3,8));


//ARRAYS
// let fruits=["Apple","Banana","Orange","Kiwi"];
//console.log(fruits);
// console.log(fruits.includes('Papaya'));
// console.log(fruits.indexOf('Orange'));
// console.log(fruits.pop());


//ARRAY METHODS

let arr=[1,2,3,4];
// const updatearr=arr.map((item)=>item=item*2);
// console.log(updatearr);

// const updatearr=arr.filter((item)=>item=item%2==0);
// console.log(updatearr);


//OBJECTS 

// const person={
//     name:"lasya",
//     age:20,
//     city:"kodad"
// };
// console.log(person.name);
// console.log(person["age"]);


const cars=[
    {
        name:"Toyoto",
        price:120000,
        color:"blue"
    },
    {
        name:"Audi",
        price:1500,
        color:"white"
    },
    {
        name:"Benz",
        price:500,
        color:"red"
    },
    {
        name:"Swift",
        price:100,
        color:"blue"
    },
];
//console.log(cars);
let car1=cars.filter(cars=>cars.price>1000);
console.log(car1);

let car2=cars.filter(cars=>cars.color==="blue");
console.log(car2);