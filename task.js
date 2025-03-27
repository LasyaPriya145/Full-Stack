// const numbers = [10, 25, 32, 47, 50, 63, 78, 89, 90, 101];
// const sum=numbers.reduce((acc,num)=>acc+num,0);
// console.log("sum of numbers:",sum);

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log("Even numbers:", evenNumbers);

// const includes47=numbers.includes(47);
// console.log(includes47);

// const num1=numbers.find(num1=>num1>60);
// console.log(num1);

// const sort=numbers.sort((a,b)=>b-a);
// console.log(sort);


// const student = {
//     name: "Arvind",
//     age: 26,
//     subjects: ["Math", "Physics", "Computer Science"],
//     scores: {
//       Math: 85,
//       Physics: 78,
//       ComputerScience: 92
//     },
//     isGraduated: false
//   };
//   student.name = "Ram";
//   console.log(student.name);  

//   student.subjects.push("Biology");
//   console.log(student.subjects);

//   delete student.scores.Physics;
// console.log( student.scores);


// const bio = student.subjects.includes("Biology");
// console.log(bio);
// console.log(Math.max(Object.values(student.scores)));


const products = [
    { id: 1, name: "Laptop", price: 75000, category: "Electronics" },
    { id: 2, name: "Phone", price: 50000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
    { id: 4, name: "Watch", price: 15000, category: "Accessories" },
    { id: 5, name: "Tablet", price: 40000, category: "Electronics" }
  ];
  

  const product1 = products.filter(p => p.category === "Electronics");
  console.log(product1);

  const price = products.reduce((sum, p) => sum + p.price, 0);
  console.log(price);
  

  const sort = [products].sort((a, b) => a.price - b.price);
  console.log(sort);

  const ExpensiveProduct = products.reduce((max, p) => (p.price > max.price ? p : max));
  console.log(ExpensiveProduct);

  const Product2 = products.filter(p => p.id !== 3);
  console.log(Product2);