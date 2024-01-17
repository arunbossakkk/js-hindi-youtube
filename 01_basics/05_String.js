// printing the strings by string interpolation method
let name = "diwakar"
let age = 54
// console.log(name + "hello world" + age)

//instead this old method i can use

// console.log('i am ${name} and ${age} years old')   // this is not single or double inverted comma

// console.log(`hello world my name is ${name} and I am ${age} years old`)

// one more type of declaring strings is by constructor method which gives access to various other methods such as length ,etc

const chatName = new String("diwakarRoom")
 
// console.log(chatName)

// we can access the methods as following
// console.log(chatName[0])

// console.log(chatName.__proto__) // gives the type and here it is as object there

// console.log(chatName.length)

// console.log(chatName.toUpperCase())

// console.log(chatName.charAt(3))  // finds out the letter after the given index

// console.log(chatName.indexOf("r"))  // finds out the letter after the given index

console.log(chatName.substring(3))     // cuts first 3 characters and displays all remaining

console.log(chatName.slice(2,6));

console.log(chatName.slice(-8, 4)); // negative starting value can also be used which cause the starting from end

const stringOne = "   apple"

console.log(stringOne.trim())  // trim method removes all the extra spaces form the string

let url = "https\\:diwakargupta%30homepage\\"

console.log(url.replace("%30", "-")) // replace the part of string with the given value

console.log(url.includes("diwakar")) //returns the boolean value if diwakar is included in the given string

const stringThree = "diwakar-gupta-nc-toronto-student"

console.log(stringThree.split('-'))       // split the string on the basis of given reference either space ,-, / etc and prints
                                        // an array including elements as splitted items  // syntax: split('splitter',limit)










