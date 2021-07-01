let name='alex';

function result(){
	let num1=9;

	function student(){
		return name+num1; // access variable global and local
	}
	b=student();
	
	return b;
}

c=result()
console.log(c);
