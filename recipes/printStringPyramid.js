console.log("String Pyramid");


let li = "";

function printStringPyramid(sizeOfx, charValue) {
	
	//Create the starting string with the blanks and length specified
	for (let i = 0; i < sizeOfx; i++) {
		li = li + " ";
		//console.log(li); 
	}

	for (let i = sizeOfx; i >= 0; i--) {
		try {
			// Replace the middle character with the passed character
			li = li.substring(0, i) + charValue + li.substring(i, li.length);
			console.log(li);
		} catch (e) { }

	}

}


printStringPyramid(20, "p");

