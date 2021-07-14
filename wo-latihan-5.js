// defining methods
function Car(model, year){
	this.model = model;
	this.year = year;
	this.displayCar = displayCar; // properties for method displayCar
}
function displayCar(){
	let result = `car was a ${this.year} ${this.model} model`;
	console.log(result);
}

let car1 = new Car('honda', 1992);
car1.displayCar();

