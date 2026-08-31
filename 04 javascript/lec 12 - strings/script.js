// const str = "Javascript"
// console.log(str)
// console.log(typeof str)

// console.log(str[4])
// console.log("size is", str.length)//10

// console.log("uppercase", str.touppercase())
// console.log("lowercase", str.toLowerCase())

// const trimString = "    JT    "
// console.log("trimstringlength", trimString.length)
// const trim1 = trimString.trim()
// console.log("trim1 length", trim1.length,trim1)
// const trim2 = trimString.trimStart()
// console.log("trim2 length", trim2.length,trim2)
// const trim3 = trimString.trimEnd()
// console.log("trim3 length", trim3.length,trim3)




//
// const newString = "Java Technocrat"
// console.log("character at 5th index", newString.charAt(5))//T
// console.log("character code at 5th index", newString.charCodeAt(5))//84

// const toBeMergedString = "is famous for Rashmi Sir"
// const mergedString = newString.concat("", toBeMergedString)
// console.log("merged string", mergedString)

// const isJavaIncluded = newString.includes("Java")
// console.log("is java included", isJavaIncluded)

// const idxOfJava = newString.indexOf("Java", 1)
// console.log("index of java", idxOfJava)


// const lastIndexOfA = newString.lastIndexOf("a")
// console.log("last index of java", lastIndexOfA)

// const replacedString = newString.replace("a", "b")
// console.log("replaced string", replacedString)

// const replacedAllString = newString.replaceAll("a", "b")
// console.log("replaced all string", replacedAllString)

// const repeatedString = newString.repeat(3)
// console.log("repeated string", repeatedString)

// const padStart = newString.padStart(20,"-")
// console.log("pad start", padStart)

// const padEnd = newString.padEnd(20,"")
// console.log("pad end", padEnd)

// const words = newString.split("")
// console.log("after split", words)

// const isStartsWithJava = newString.startsWith("Java")
// console.log("starts with java", isStartsWithJava)

// const isEndsWithJava = newString.endsWith("Technocrat")
// console.log("endss with java", isEndsWithJava)


//===========diff betn slice & substring
const s = 'We are developers'
console.log(s.length)//17

console.log(s.slice(10))//elopers
console.log(s.substring(10))//elopers


console.log(s.slice(-9))//evelopers
console.log(s.substring(-9))//-9 => 0 //we are developers

console.log(s.slice(17)) //as maxlength is 17, maxidx can be 16,""
console.log(s.substring(17))//""

console.log(s.slice(10,13))//elo(as end index is not included)
console.log(s.substring(10,13))//elo(as end index is not included)

console.log(s.slice(13,10))// st > en// "" (empty string) )
console.log(s.substring(13,1))// st > en // swap => substring(10,13) //elo

console.log(s.slice(-8,-2))// velope
console.log(s.substring(-8,-2))// substring(0,0) // ""

console.log(s.slice(13,-6))//""
console.log(s.substring(2,-6))// // substring(2,6) //substring(0,2) //We

//s.substr()