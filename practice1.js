// Destructuring for Arrays

const { engine } = require("express/lib/application");

const arr=[1,2,3,4,5];

const [first,second,third,fourth,fifth]=arr;

console.log(first,fourth)

//Destructuring for Objects

const obj={
    employeeId:1,
    employee:"lasya",
    employeeSalary:50000
};

const {employeeId,employee,employeeSalary}=obj;

console.log(employeeId,employee)

//Rest Operater

const arr2=["Hello",2,3,4,5];
const [firstString,...remaining]=arr2;
console.log(firstString);
console.log(remaining);

function displayNames(...a){
    console.log(`the names are:${a}`)
}

displayNames("lasya","bhavya","srija","sai","anu")

//Spread in Arrays

const arr3=["a","b","c"];
const dummy=["orange","apple"];
const arr4=[...arr3,...dummy];
arr4.push("d");
console.log(arr3);
console.log(arr4);

//Spread in Objects

const car1={name:"bmw",price:"1 cr"};
const car2={color:"white",engineCC:5000};
const car={...car1,...car2};
console.log(car)


//Callback Function

function square(val){
    return val*val
}
function cube(val){
    return val*val*val
}


function sumOfSomething(val1,val2,callbackFn){
    let firstValue = callbackFn(val1);
    let secondValue = callbackFn(val2); 
    return firstValue + secondValue
}

// const ans = sumOfSomething(2,3,cube)
// console.log(ans);


const ans = sumOfSomething(2,3,square)
console.log(ans);

setTimeout(()=>console.log("Hello Everyone"),2000)



