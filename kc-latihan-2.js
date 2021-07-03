// for loop on Map
// use a for...of loop to return an array of [key, value] for each iteration
let color = new Map();
color.set('color1', 'white');
color.set('color2', 'black');
color.set('color3', 'grey');

// iterate Map
for(let [key, value] of color){
	console.log(key, 'is', value);
}

fresult=color.size;
color.clear(); // clear Map
lresult=color.size;

console.log(fresult); // return 3
console.log(lresult); // return 0
