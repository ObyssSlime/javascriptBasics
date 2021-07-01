let a=6; // variable global

function result(){
	return a*a; // function can access variable global
}

b=result();
console.log(b);
