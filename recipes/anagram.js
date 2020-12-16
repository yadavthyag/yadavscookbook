 
console.log("Are the given two words an Anagram");

function isAnagramDeclarative(valueInp1,valueInp2){
   valueInp1 = valueInp1.toLowerCase();
   valueInp2 = valueInp2.toLowerCase();


   if(valueInp1.sort== valueInp2.sort){

      console.log("Its an anangram declarative : "+valueInp1+" : "+valueInp2);

   }else{
      console.log("Its not an anangram declarative : "+valueInp1+" : "+valueInp2);

   }

}

isAnagramDeclarative("Masrsy","Arssmy");
