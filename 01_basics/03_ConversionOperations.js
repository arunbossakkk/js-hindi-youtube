// let score = "33";

// console.log(typeof score)
// console.log(typeof(score))    // both methods are valid and gives the same output

//here we defined the value so we know score has number inside but sometimes we dont know from where the input is coming so we use typecasting 

// let scoreInNumber = Number(score)

// console.log(typeof scoreInNumber)

//what if the number contains elements other than digit? Will it be converted to digit?

// let num = "33abc"

// let numA = Number(num);
// console.log(typeof numA);  // yes the the output is Number but its Value is NaN its a kind of bug 


//while logging numA in console then it shows the Value NaN

// console.log(numA)

// what if we convert null to number?

// let numB = null
// let numC = Number(numB)

// console.log(numC) //the output is zero

// what if convert boolean values(true/false) to number? => we get values(1/0)

// how about converting the other values to boolean

let isLoggedIn = null;
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log( booleanIsLoggedIn) // the output Value is true

//for every value in the it will be true except 0 , empty , null
// "hitesh" => true








