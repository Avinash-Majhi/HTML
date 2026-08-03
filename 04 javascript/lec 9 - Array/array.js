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

//fruits.push("Orange", "Cherry") // add new element at the end of array
//console.log(fruits)

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
if(fruits.includes("Mango")){
//step-2: if present then extract the index of element
const index = fruits.indexOf("Mango")
//step-3: then update the element at that index
fruits[index] = "kiwi"

console.log(fruits)
}else{
//step-4: if not present then do nothing
alert("search element is not present in array")
}

