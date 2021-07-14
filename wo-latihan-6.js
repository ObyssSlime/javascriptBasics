// defining getters and setters
let o = {
	a: 7,
	get b(){
		return this.a + 1;
	},
	set c(x){
		this.a = x / 2;
	}
}

console.log(o.a); // 7
console.log(o.b); // return 8
o.c = 50; // set value for 'a' properties
console.log(o.a); // 'a' properties has change
