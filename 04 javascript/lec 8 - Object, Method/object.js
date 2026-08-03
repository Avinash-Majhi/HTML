// const user = {
//     firstname : "Avinash",
//     lastname : "Majhi",
//     age : 21,
//     isGraduated : true,
//     'address' : 'BBSR',
//     'course-fee' : 30000.99, // Without this '' it will throw an error, because of special char, blank space,etc.
//     greet : function(){
//         console.log("Avinash says Hello !!!")
//         console.log("My Fullname is: ",this.fullname) // Without 'this' is throws undefinied
//     },

//     add : function(a,b){
//         console.log("Adding to numbers: ",(a+b))
//     }
//     // hello :() =>{
//     //     console.log("Hello Everyone!")
//     // } 
// }

// // Extract Complete Object
// // console.log("user object: ",user)

// // Extract single values from objects
// console.log("first name is: ",user.firstname)
// console.log("last name is: ",user.lastname)
// console.log("Full name is: ",user.firstname,user.lastname )

// // Alternative way
// console.log("age is: ",user['age'])
// // console.log("age is: ",user.course-fee)
// console.log("course fee is: ",user['course-fee'])
// console.log("full name is: ",user.fullname) // undefiend - as key is not present in Object.

// // ADD/UPDATE key to object
// user.fullname = "Gunjan Senapati"
// user.isGraduated = false
// user['Aadhar No'] = 67949949439
// console.log(user)

// //  Access Methods
// user.greet()
// // user.hello()
// user.add(100,200)

// ==============Nested Object===============
//const employee = {
   // fullname : 'Alina Scott',
   // age : 32,
   // address : {
   //     city : "BBSR",
    //    state : "Odisha",
    //    PIN : "751007"
  //  }
//}

//console.log(employee)

const student = {
    fullname : 'Avinash Majhi',
    age : 22,
    address : {
        city : "CTC",
        state : "Odisha",
        PIN : "753003"
    },
    phoneNo : {
       Yours : "9876543210",
       Alternate : "9876543211"
    },
    collegeName : "Ravenshaw University",
    course : "Bsc.",
    branch : "ITM",

}
console.log(student)
console.log(student.phoneNo.Yours)
console.log(student.collegeName)