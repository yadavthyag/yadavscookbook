console.log("Are two passed stirngs an anagram or not");

 function isAnagram(valueInp1,valueInp2){
   valueInp1 = valueInp1.toLowerCase();
   valueInp2 = valueInp2.toLowerCase();

   console.log("sortStringCust(valueInp1) : "+sortStringCust(valueInp1));
   console.log("sortStringCust(valueInp2) : "+sortStringCust(valueInp2));

   if(sortStringCust(valueInp1) === sortStringCust(valueInp2)){
      console.log("Its an anangram declarative : "+valueInp1+" : "+valueInp2);

   }else{
      console.log("Its not an anangram declarative : "+valueInp1+" : "+valueInp2);

   }
   console.log("============");

}

function sortStringCust(strToSort) {
   //Split to array sort and the join back to string
   return strToSort.split('').sort().join('');
};

isAnagram("Mary","Army");
isAnagram("Masrsy","Arswdy");
isAnagram("alright","htgiral");
