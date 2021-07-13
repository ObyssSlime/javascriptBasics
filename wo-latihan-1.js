// objects and properties

let people1 = new Object();
people1.name = 'alex';
people1.hobby = 'reading';
people1.age = 21;

// written using an object initializer
let people2 = {
	name: 'steve',
	hobby: 'coding',
	age: 12,
}

// using bracket notation
let people3 = {};
people3['name'] = 'john';
people3['hobby'] = 'design';
people3['age'] = 19;

// access properties
console.log(people1.name);
console.log(people1.hobby);
console.log(people1.age);

console.log(people2.name);
console.log(people2.hobby);
console.log(people2.age);

console.log(people3.name);
console.log(people3.hobby);
console.log(people3.age);

console.log(people3.country); // undefined properties
