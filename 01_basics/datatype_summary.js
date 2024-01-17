// broadly datatypes are categorized into two groups
// primitive and reference (non primitve datatype)

// primitive datatype: String , Number, BigInt, Null, Undefined, Symbol, Boolean

// non primitve datatype: Arrays, Object, Function

// function can be stored as variable // const myFucntion = function(){console.log("Hello World!")}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory are of two types Stack and Heap

// Stack ( for all primitive datatypes stack memory is used) &&&& Heap( for all non primitive datatypes)

                                                                                                            //dname
let name = "diwakar"                                                                                        // name
let dName = name // here a in stack like tiles piled up is created and copy of (name) is                    //dname
                // given to the (dName)   example is given in the right hand side
                
dName = "gupta"
console.log(dName)
                    // here (dName) stores name but when value is changed in it the value
                    // that it includes is only changed but not in (name) this happens for
                    // primitive datatype
console.log(name);

// And for non primtive data 

let userOne = {
    email:"userone@gmail.com",
    fbId: "diwakar"
}

let userTwo = userOne               // for userTwo reference of data of userOne is given and when change occurs in one the original 
                                    // data is changed and every variable acess it by reference and get same data always

userTwo.email = "dgupta@gmail.com"

console.log(userOne)
console.log(userTwo)


