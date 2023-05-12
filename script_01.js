
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : chenk !
*/


// module: division a / b |  test:
output(divide(4,2));
output(divide(3,2));
output(divide(3,-2));
output(divide(3,0));
function divide(a,b) {

	if (b != 0) {
		return a/b;
	} else {
		return "Teilen durch 0 nicht möglich";
	}
	

}


// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b){
	return a*b;
}
// output(subtract(2,2));
// output(subtract(2,-2));
// output(subtract(2,0));


// module: subtraction a - b |  test:
function subtract(a,b) {
	return a-b;
	
}

// module: addition a + b |  test:
function add(a,b) {

}


// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	// return a + b;	
}





// module: output | test:
function output(outputData) {
	console.log(outputData);
}
  