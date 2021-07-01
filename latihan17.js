let a=1, b=a;
			
loop1: // label looping 1
for(a; a<=10; a++){
	loop2: // label looping 2
	for(b; b<=5; b++){
		if(b==3){
			break loop2;
		}
		console.log('ini b:',b);
	}
	console.log('ini a:',a);
}
