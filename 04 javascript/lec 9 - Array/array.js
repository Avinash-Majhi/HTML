//const s1 = "Amit";
//const s2 = "Ankit";
//const s3 = "Arjun";

//const stds = ['Amit', 'Ankit', 'Arjun']
//console.log(stds)

//console.log(stds[0])
//console.log(stds[1])
//console.log(stds[2])

//for(let i=0; i<stds.length; i++){
//    console.log(stds[i])
//}

//console.log(stds[4])// undefined 

//stds[10] = "Avinash"

//===================Array Methods========================
const fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange") // add new element at the end of array
console.log(fruits)

//fruits.pop() // remove last element from array
//console.log(fruits)

//fruits.unshift("Cherry") // add new element at the beginning of array
//console.log(fruits)

//fruits.shift() // remove first element from array
//console.log(fruits)

//console.log(fruits.includes("Apple")) 
////console.log(fruits.includes("Apple",2)) // search for element from index 2

//console.log(fruits.indexOf("Apple")) // return index of element
//console.log(fruits.indexOf("Apple",2)) // return index of element from index 2

//step-1: check if element is present in array or not
//if(fruits.includes("Mango")){
//step-2: if present then extract the index of element
//const index = fruits.indexOf("Mango")
//step-3: then update the element at that index
//fruits[index] = "kiwi"

//console.log(fruits)
//}else{
//step-4: if not present then do nothing
//alert("search element is not present in array")
//}

//fruits.push("Mango","Orange")
//console.log(fruits)
//console.log("last index of mango", fruits.lastIndexOf("Mango")) // return last index of element

console.log(fruits.slice(0,3)) // return new array from index 0 to 2
console.log(fruits.slice(1,3)) // return new array from index 1 to 2
console.log(fruits.slice(2,4)) // return new array from index 2 to 3
console.log(fruits.slice()) // return new array from index 2 to end of array

//fruits.splice(2,3) // remove 2 elements from index 1
//console.log("After splice",fruits)

fruits.splice(2,3,"Cherry") // add 2 elements at index 1
console.log("After splice",fruits)

const numbers = [10,20,30]
const fruitsWithNumbers = fruits.concat(numbers) // combine two arrays
console.log("fruits with numbers",fruitsWithNumbers)

const fruitsString = fruits.join("-#?") // convert array to string
console.log(fruitsString)

fruits.reverse()
console.log("After reverse",fruits)

fruits.push(18,21,3,100)
fruits.sort() // sort array in ascending order  
console.log("After sort",fruits)

//const arr = [10,20,30]
//arr.sort((a,b)=>b-a) // sort array in descending order using compare function
//console.log(arr)

const arr = [10,20,30]
arr.sort(xyz) // sort array in descending order using compare function
console.log(arr)

//write the arguments outside of the function and pass them to the function.
function xyz(a,b){
    return a-b
}
