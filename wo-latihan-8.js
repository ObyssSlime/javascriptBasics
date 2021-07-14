// comparing objects
// two distint objects are never equal

let fruit = {name: 'apple'};
let fruitbear = {name: 'apple'};

result1 = fruit == fruitbear;
result2 = fruit === fruitbear;

console.log(result1); // false
console.log(result2); // false
