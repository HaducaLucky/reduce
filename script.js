//! .reduce() = reduce the elements of an array
//!             to a single value

//* price 

const prices = [5, 30.02, 10.12, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

//* grades

const grades = [88, 90, 87, 89, 92, 96];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}