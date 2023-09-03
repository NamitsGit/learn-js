// 3 ways of defining functions
// 1. Function as a regular binding
const square = function(x) {
    console.log("Within square function defined as regular binding, with arguments "+x);
    return x*x;
};
console.log(square(12));

// 2. Declaration notation
function cube(x) {
    console.log("Within cube function defined with declaration notation, the arguments are "+x);
    return x*x*x;
}
console.log(cube(2));

// 3. Arrow function
const power = (base, exponent) => {
    console.log("Within power function defined as arrow function the arguments received are "+base+","+exponent+")");
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2,10));