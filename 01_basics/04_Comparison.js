console.log(null > 0)
console.log(null == 0);
console.log(null >= 0)

// this happens because equality check == and comparison operators works differently 
// Comparison convert null to number treating as 0 while comparing
// same happens with undefined

