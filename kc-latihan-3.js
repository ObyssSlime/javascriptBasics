// Set object
// Set objects are collections of values. You can iterate its elements in insertion order.

let bag = new Set();
bag.add(1);
bag.add(1); // A value in a Set may only occur once; it is unique in the Set's collection.
bag.add('buku');

fsizeItem = bag.size
hasItem = bag.has('buku');
bag.delete('buku');
lsizeItem = bag.size

console.log(hasItem); // return true
console.log(fsizeItem); // return 2
console.log(lsizeItem); // return 1
