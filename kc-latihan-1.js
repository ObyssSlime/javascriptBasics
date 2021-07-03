// map object
// ECMAScript 2015 introduces a new data structure to map values to values. A Map object is a simple key/value map and can iterate its elements in insertion order.

let petName = new Map(); // the keys of an object are strings or symbols
petName.set('dog','alex'); // set into the Map
petName.set('cat','ryu'); // set into the Map
petName.set('fox','shin'); // set into the Map
size = petName.size // count of Map
dogName = petName.get('dog'); // key dog from Map
hasCat = petName.has('cat');
rmFox = petName.delete('fox');
hasFox = petName.has('fox');

console.log(rmFox); // return true
console.log(hasFox); // return false
console.log(size); // return 2
console.log(dogName); // return alex
console.log(hasCat); // return true


