console.log("Are two passed stirngs an anagram or not");

 function isAnagram(valueInp1,valueInp2){
   valueInp1 = valueInp1.toLowerCase();
   valueInp2 = valueInp2.toLowerCase();

   console.log("sortStrungCust(valueInp1) : "+sortStrungCust(valueInp1));
   console.log("sortStrungCust(valueInp2) : "+sortStrungCust(valueInp2));

   if(sortStrungCust(valueInp1) === sortStrungCust(valueInp2)){
      console.log("Its an anangram declarative : "+valueInp1+" : "+valueInp2);

   }else{
      console.log("Its not an anangram declarative : "+valueInp1+" : "+valueInp2);

   }
   console.log("============");

}

function sortStrungCust(strToSort) {
   //Split to array sort and the join back to string
   return strToSort.split('').sort().join('');
};

isAnagram("Mary","Army");
isAnagram("Masrsy","Arswdy");
isAnagram("alright","htgiral");
