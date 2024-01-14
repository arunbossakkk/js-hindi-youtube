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

// console.log( booleanIsLoggedIn) // the output Value is true

//for every value in the it will be true except 0 , empty , null
// "hitesh" => true


// let num = 3;
// let negValue = -num

// console.log(negValue)

// console.log(2 + "3" + 1)


// numerical operations are done in first but when it gets string in the way then everything in the way 
// of processing is converted into string implicitly


// operator precedence means what if the operator is used as prefix and postfix. 

let num = 100;
num++
console.log(num) //postfix

// console.log(++num) //prefix






