function pet(name, age=5, color){ // age using default parameter
	color="brown"; // color using default parameter

	result=console.log("my pet name is "+name+", he is "+age+" years old, and the color is "+color);
	return result
}

pet("yogs",2) // default parameter can change if argument available
