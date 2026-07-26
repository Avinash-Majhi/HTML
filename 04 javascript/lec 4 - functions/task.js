//5 codes using default parameters!!!

function task(Task){

 console.log("Task Name :", 'write 5 codes')

}

task()

function code1(num1){

 console.log("Hi!!")

}

code1()

function code2(num2){

 console.log("I am Avinash.")

}

code2()

function code3(num3){

 console.log("I am from CTC (^.^)")

}

code3()

function code4(num4){

 console.log("I am excited to code with js...")

}

code4()


//5 codes using dynamic parameters!!!

function game(gname = 'Valorant'){

    console.log("I complete all stages of :", gname, '- it takes me 4hr..')
   
}
game('God of War')

function vehicle(vname = 'R15'){

    console.log("I have an bike -", vname, ', i love to go rides on it...')
   
}
vehicle('Super Meteor 650')

function music(mname = 'mitraz'){

    console.log("I have a large plasylist...", mname, ' is top on my fav list!!')
   
}
music('Jugraafiya')

function sports(sname = 'cricket'){

    console.log("I am good at -", sname, '- i played this sports for 7years..')
   
}
sports('Foot Ball')

function course(cname = 'python'){

    console.log("I am pursuing -", cname, 'for 6 months..')
   
}
course('Java')



//5 codes using addName method!!!

function addPHn(phone){

   return " Avinash's " + phone
}

let  phoneName = addPHn("Samsung M56")
console.log(phoneName)


function addGAme(game){

   return "BGMI is better than " + game
}

let  gameName = addGAme("Free Fire.")
console.log(gameName)

function sub(a,b){

  return (a - b)
   
}
console.log(sub(10,20))

function mul(a,b){

  return (a * b)
   
}
console.log(mul(10,20))

function div(a,b){

  return (a / b)
   
}
console.log(div(10,20))

