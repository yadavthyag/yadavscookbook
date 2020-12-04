console.log("String Pyramid");


let li = "";

function printXes(sizeOfx, charValue) {
	// Creating a array
	console.log(li); // [1, 2] 

	for (let i = 0; i < sizeOfx; i++) {
		// create the elements first
		li = li + " ";
		//console.log(li); 

	}


	for (let i = sizeOfx; i >= 0; i--) {
		try {
			// Replace elements between with the last charter
			li = li.substring(0, i) + charValue + li.substring(i, li.length);
			console.log(li);
		} catch (e) { }


	}

}


printXes(20, "p");

