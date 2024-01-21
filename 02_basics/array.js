 let arr = [1,3 , 4 ,5 ,"true","diwakar"] // ways to create array

let myArr = new Array(9,8,7,6,5,4,3,2,1)



// values can be added to it when ever required

// methods in javascript

arr.push("dipak") // .push() to add one data in last index
// console.log(arr)

myArr.push(0)
// console.log(myArr)

myArr.pop(0)      //  .pop() to delete one data from the last index
// console.log(myArr)

// myArr.unshift(9) // .unshift() to add one data in first index or index[0]

// myArr.shift()   // to delete the first value , arguements is not passed in this.

// console.log(arr.indexOf(9)); // output is -1 because it doesnot contains that value


const newArray = arr.join() // .join() converts every elements to string.
// console.log(newArray)
// console.log(typeof newArray);


console.log(arr.slice(2,4)); //output is [4,5] returns the array without manupulating original array
                        // it includes the range 2 to 4


console.log(arr.splice(2,4)); //output is [4,5, "true", "diwakar"]
                            // it includes the count form 2 start take four characters.
                            // the original array becomes [1,2,"dipak"] * it maupulates the original string


                        
console.log(arr);




