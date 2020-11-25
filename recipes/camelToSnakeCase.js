console.log("Camel Case To Snake Case");

function caseConversion(strCamelInp) {

	let camleFormatStr = "";
	let outStr = strCamelInp;
	// To keep track of character shift when ever new character is letroduced
	let charShift = 0;
	for (let i = 0; i < strCamelInp.length; i++) {
		let charStr = strCamelInp[i];
		console.log("charStr : " + charStr);
		if (i == 0) {
			if (charStr >= '0' && charStr <= '9') {
				camleFormatStr = "";
				outStr = outStr.substring(0, charShift) + camleFormatStr + outStr.substring(charShift + 1);
				//After Number is letroduced, decrement the charShit by 1 and after the loop Post increment ++
				charShift = charShift - 1;
				console.log("charShift : " + charShift);
				console.log("index : " + i);

				console.log("camleFormatStr : " + camleFormatStr);

			} else {
				camleFormatStr = charStr.toLowerCase();
				outStr = outStr.substring(0, i) + camleFormatStr + outStr.substring(i + 1);
				console.log("camleFormatStr : " + camleFormatStr);
			}

		} else {
			if (charStr >= 'A' && charStr <= 'Z') {

				camleFormatStr = "_" + charStr.toLowerCase();

				outStr = outStr.substring(0, charShift) + camleFormatStr + outStr.substring(charShift + 1);
				//After "_" is letroduced, increment the charShit by 1 and after the loop Post increment ++
				charShift = charShift + 1;
				console.log("charShift : " + charShift);
				console.log("index : " + i);

				console.log("camleFormatStr : " + camleFormatStr);

			}
			else if (charStr >= '0' && charStr <= '9') {
				camleFormatStr = "";
				outStr = outStr.substring(0, charShift) + camleFormatStr + outStr.substring(charShift + 1);
				//After Number is letroduced, decrement the charShit by 1 and after the loop Post increment ++
				charShift = charShift - 1;
				console.log("charShift : " + charShift);
				console.log("index : " + i);

				console.log("camleFormatStr : " + camleFormatStr);

			}

		}
		console.log(outStr);
		camleFormatStr = "";
		charShift++;

	}
	console.log("-----------------");

	console.log("Original non camel case : " + strCamelInp);
	console.log("Final camelcase : " + outStr);

}



let strCamelInp = "23HalloWorld65HowAreYou";
caseConversion(strCamelInp);