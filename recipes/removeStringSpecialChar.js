console.log("Remove Special Characters From String");


function removeSpecialCharOnlyString(strOri) {

    console.log("=================== \n removeSpecialCharOnlyString original String : " + strOri);
    //declare a empty variable to store the new string
    let cleanStr = "";

    for (let i = 0; i < strOri.length; i++) {
        // Only String
        if ((strOri[i] >= 'A' & strOri[i] <= 'Z') || (strOri[i] >= 'a' & strOri[i] <= 'z')) {
            cleanStr = cleanStr + strOri[i];
        }

    }

    console.log("\n Clean STRING no special char or no num : " + cleanStr)


}

function removeSpecialCharOnlyDigits(strOri) {

    console.log("=================== \n removeSpecialCharOnlyDigits original String : " + strOri);
    //declare a empty variable to store the new string
    let cleanStr = "";

    for (let i = 0; i < strOri.length; i++) {
        //Only digits
        if (strOri[i] >= '0' & strOri[i] <= '9') {

            cleanStr = cleanStr + strOri[i];

        }

    }
    console.log("\n Clean NUMBER no special char or string : " + cleanStr)

}


function removeStringNumChar(strOri) {

    console.log("=================== \n removeStringNumChar original String : " + strOri);
    //declare a empty variable to store the new string
    let cleanStr = "";

    for (let i = 0; i < strOri.length; i++) {

        //only special charatcers
        if (!((strOri[i] >= 'A' & strOri[i] <= 'Z') || (strOri[i] >= 'a' & strOri[i] <= 'z') || (strOri[i] >= '0' & strOri[i] <= '9'))) {

            cleanStr = cleanStr + strOri[i];

        }

        //console.log("Added : "+cleanStr)
    }


    console.log("\n Clean SPECIAL CHAR no string or num : " + cleanStr);

}


let str = "H/a.l312lo7.*^";

removeSpecialCharOnlyDigits(str);
removeSpecialCharOnlyString(str);
removeStringNumChar(str)
