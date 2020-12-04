console.log("Inverted String Pyramid");


let li = "";

function printInvertedPyramid(sizeOfx, charToPrint) {

	//Create the starting string with the character and length specified
	for (let i = sizeOfx; i >= 0; i--) {
		li = li + charToPrint;
	}
	//console.log(li);

	//Splice the string in the first and last to print blanks
	for (let j = sizeOfx; j >= 0; j--) {
		li = " " + li.substring(0, j + 1) + li.substring(li.length, li.length - 1) + " "
		console.log(li);
		if (!li.includes(charToPrint)) {
			//Dont print anything
			break;
		}
	}


}

printInvertedPyramid(20, "b");

