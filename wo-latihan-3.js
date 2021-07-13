// creating objects using a constructor function

function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
}

let mycar = new Car('Eagle', 'Talon TSi', '1993');
let hercar = new Car('Nissan', '300ZX', '1992');

mycarMake = mycar.make
hercarMake = hercar.make
console.log(mycarMake);
console.log(hercarMake);
console.log(mycar);
console.log(hercar);
