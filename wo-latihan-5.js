// creating objects using the object.create method

let animal = {
	type: '', // default value is null
	displayType: function(){
	console.log(this.type);
	}
}

let fish = Object.create(animal);
fish.type = 'fishes';
fish.displayType();

let bird = Object.create(animal);
bird.type = 'birds';
bird.displayType();

