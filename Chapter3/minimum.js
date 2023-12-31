/**
 * Minimum
    The previous chapter introduced the standard function Math.min that returns
    its smallest argument. We can build something like that now. Write a function
    min that takes two arguments and returns their minimum.
 */

const mini = (a, b) => a <= b ? a : b;

console.log(mini(4, 5));
console.log(mini(5, 5));