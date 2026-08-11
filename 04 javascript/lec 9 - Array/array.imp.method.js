let numbers = [10, 20, 30, 40, 50];

//for (let i = 0; i < numbers.length; i++) 
    //console.log(numbers[i]);
  
//numbers.forEach(function printNumbers(value, idx,arr) {
//console.log("value is", value, "at idx", idx, "of array", arr);
//})   


//numbers.forEach(printNumbers);
//function printNumbers(value, idx, arr) {
  //  console.log("value is", value, "at idx", idx, "of array", arr);
//}

//numbers.forEach(printNumbers);
//const printNumbers = function(value, idx, arr) {
//    console.log("value is", value, "at idx", idx, "of array", arr);
//};

//numbers.forEach(function(value, idx, arr) {
//    //console.log("value is", value, "at idx", idx, "of array", arr);
//});

//numbers.forEach((value, idx, arr) => {
  //  console.log("value is", value, "at idx", idx, "of array", arr);
//})

// ======================map method========================
//const numbersIncreaseByTwo = numbers.map((value, idx, arr) => {
  // console.log("value is", value, "at idx", idx, "of array", arr);
  // return value + 2;
//});
//console.log("numbersIncreaseByTwo:", numbersIncreaseByTwo);

//const squareNumbers = numbers.map((value) => value * value);
//console.log("squareNumbers:", squareNumbers);

//const qubeNumbers = numbers.map((value) => value * value * value);
//console.log("qubeNumbers:", qubeNumbers);


//const users = [
   // {
   //     id: 101,
   //     name: "Avinash Majhi",
   //    salary: 10000,
 //   },

   // /{
   //     id: 102,
   //     name: "Arpita Sahoo",
   //     salary: 20000,
   // },  
//
   // {
   //     id: 103,
   //     name: "Rohit kumar",
    //    salary: 30000,
   // },

   // {
  //      id: 104,
  //      name: "Rohini Prusty",
  //      salary: 40000,
  //  },  
//];
//const modifiedUsers = users.map((value) => {

//console.log("value is",value)
 
   //     return {
      //  id: value.id,
      //  firstName: value.name.split(" ")[0],
      //  bonus : value.salary*.10   
    //}
//})
//console.log("// modified users", modifiedUsers)

//const modifiedUsers = users.map(user => ({
 //   id: user.id,
  //  firstname: user.name.split(" ")[0],
   // bonus: user.salary * .10

//}))
//console.log("// modified users", modifiedUsers)
//=========================filter method========================
//numbers = [10, 11, 20, 21, 30, 31]

//const divisibleByTen = numbers.filter((value, idx, arr) => {
 //   console.log("value is", value, "at idx", idx, "of array", arr)

   // return value % 10 == 0

//})
//console.log("divisible by ten", divisibleByTen)
//divisibleByTen.forEach(value)

//const users = [
 // { id: 1, name: "Amit", isActive: true },
 // { id: 2, name: "Rahul", isActive: false },
 // { id: 3, name: "Neha", isActive: true }
//];



//const getActiveUsers = (userArray) => {
 // return userArray.filter(user => user.isActive);
//};
//const activeUsers = getActiveUsers(users);


//const products = [
 // { id: 1, name: "Laptop", price: 50000 },
  //{ id: 2, name: "Mobile", price: 20000 },
  //{ id: 3, name: "Tablet", price: 30000 }
//];

//const expensiveProductNames = products
 // .filter(product => product.price > 25000)
 // .map(product => product.name);
//console.log("products",expensiveProductNames )


//const students = [
 // { name: "A", marks: 80 },
 // { name: "B", marks: 45 },
 // { name: "C", marks: 60 }
//];
//const studentResults = students.map(student => ({
 // ...student,
 //result: student.marks >= 50 ? "Pass" : "Fail"
//}));
//console.log("student result", studentResults)

//const orders = [
 // { id: 1, amount: 1000, status: "delivered" },
  //{ id: 2, amount: 2000, status: "pending" },
  //{ id: 3, amount: 1500, status: "delivered" }
//];

//const totalDeliveredAmount = orders
 // .filter(order => order.status === "delivered")
 // .reduce((total, order) => total + order.amount, 0);

 //console.log("total delivered amount", totalDeliveredAmount)
// ======================some()
//numbers =[10, 20, 30, 40, 41, 51]
//const isAnyOddPresent = numbers.some(num => num % 2 == 1)
//console.log("//// is Any Odd Prensent", isAnyOddPresent)


//const isEveryMembersAreEven = numbers.every(num => num % 2 == 0)
//console.log("//// is every members are even", isEveryMembersAreEven)

//const products = [
 //{ id: 1, name: "Laptop", price: 50000 },
//  { id: 2, name: "Mobile", price: 20000 },
 // { id: 3, name: "Tablet", price: 30000 }
//];
//const isPriceGreaterThan40k = products.some(price => price > 40000 == 0)
//console.log("/// is price greater than 40k", isPriceGreaterThan40k)
 
//const isLessThan40k= products.(price => price < 40000)
//console.log("//// Rest of the product below 40k", isLessThan40k)

//const users = [
 //{ id: 1, name: "Amit", isActive: true },
  //{ id: 2, name: "Rahul", isActive: false },
  //{ id: 3, name: "Neha", isActive: true }
//];


//=====================find()
numbers=[10, 20, 30, 40, 51]

//const number = numbers.find(num => num == 41)
//console.log("is 41 found", number)

//const numberIdx = numbers.findIndex(num => num == 41)
//console.log("is 41 found", numberIdx)


//const products = [
 //{ id: 1, name: "Laptop", price: 50000 },
  //{ id: 2, name: "Mobile", price: 20000 },
  //{ id: 3, name: "Tablet", price: 30000 }
//];
//const product = products.find(item => item.id  == 2)
//console.log("is product found", product)


//const students = [
  //{ name: "A", marks: 80 },
  //{ name: "B", marks: 45 },
//  { name: "C", marks: 60 }
//];

//const student = students.find(idx => idx.name == 'C')
//console.log("is student found", student)

//const studentIdx = students.findIndex(idx => idx.name == 2)
//console.log("is student idx found", studentIdx)

//====================Reduce Method()
const sum = numbers.reduce((preVa1, currVa1, idx, arr) => {
  console.log("previous Value is", preVa1, "curren Value is", currVa1,"at idx", idx, "of array", arr )

  return preVa1 + currVa1
})

console.log("//////// sum", sum)

const orders = [

{
  id: 101,
  amount: 2000,
  status: "Delivered"
},
{
  id: 102,
  amount: 3000,
  status: "Pending"
},
{
  id: 103,
  amount: 6000,
  status: "Delivered"
}
]

//1. find the orders whose status is Delivered

const deliveredOrder = orders.filter(item => item.status == "Delivered")
  console.log("orders delivered:", deliveredOrder)


//2. merge the delivered orders amount to get the total sale

 const totalSale = deliveredOrder.reduce((prev, curr) => {
 console.log(".......prev", prev,"curr",curr)
 return  prev + curr.amount
 }, 0)
 console.log("////////total sale", totalSale)

 const users = [

{
  id: 1,
  name: "Sarthak",
  age: 20
},
{
  id: 2,
  name: "Amit",
  age: 26
},
{
  id: 3,
  name: "Nikhil",
  age: 28
},
]

//find the average age of users
 const totalAge = users.reduce((prev, curr) => {
 console.log(".......prev", prev,"curr",curr)
 return  prev + curr.age
 }, 0)
 console.log("////////total age", totalAge)
 console.log("//////// Avg age", totalAge / users.length)