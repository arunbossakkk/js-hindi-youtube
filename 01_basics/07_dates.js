let dateNow = new Date(); // date is an object

// console.log(dateNow);  // dates are calculated in milliseconds from the arbitary value jan 1 1970

// console.log(dateNow.toString()) // gives output in string thu jan 18 2034 time and time zone also

// console.log(dateNow.toDateString()); // same output excluding time and time zone

// console.log(dateNow.toISOString());

// console.log(dateNow.toJSON());

// console.log(dateNow.toLocaleDateString()); // gives output in month/day/year format

// console.log(dateNow.toLocaleString())  //same date format as above but time in hours:minute:second

// let dateInstance = new Date(2023, 1, 22);//we can pass more values in it and finally it sets time hour minute second etc
// here the date was in array format that is why the month started from zero(0)


let dateInstance = new Date("2023-11-20"); // this kind of format as well to pass date 


// console.log(dateInstance.toString()); // gives the date in string and month in (date) object starts from zero (i.e Jan)

// let myTimeStamp = Date.now()

// console.log(myTimeStamp); // gives the value in milli second

// console.log(dateInstance.getTime()) // both the values we get in miliseconds and we can compare them both. this concept
                                    // is mostly used in hotel booking app, creating poll etc

// to find the value in seconds

// console.log((Date.now()/1000)); // gives the decimal value as well but we dont want it so to remove it

// console.log(Math.floor(Date.now()/1000)); // removes the decimal value

console.log(dateInstance.getDate()); // gives the date same as there are lot of method to extract the things

console.log(dateInstance.getDay());

console.log(dateInstance.getFullYear());

console.log(dateInstance.toLocaleString('default', {    // in locale we can pass object and can customize the output here
                                                        // we customized the name of weekday form Mon to Monday
    weekday: "long"
})); 
