console.log("Inbuilt String Manipulations");


function sortStringCust(strToSort) {
	console.log("================");
	console.log("Orignal string : "+strToSort);
	//Split to array sort and then join back to string
	strToSort= strToSort.split('').sort().join('');
	console.log("After sorting : "+strToSort);
	return strToSort.split('').sort().join('');

 };

 function revStringCust(strToRev) {
	console.log("================");
	console.log("Orignal string : "+strToRev);
	//Split to array reverse and then join back to string
	strToRev = strToRev.split('').reverse().join('');
	console.log("After reversing : "+strToRev);

	return 
 };


sortStringCust("afdcght123");
revStringCust("abcdefgh123");

