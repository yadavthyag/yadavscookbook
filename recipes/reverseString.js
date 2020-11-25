console.log("String Reversal");


function revString(strOri) {

    console.log("original String : " + strOri);
    //declare a empty variable to store the reversed string
    let revStr = "";

    //start from the last character & itterate up to 0th charcter in string (JS lets you manipulate string and extract charcters directly)
    for (let i = strOri.length - 1; i >= 0; i--) {

        //append the revStr variable with itself and the current charcter index
        revStr = revStr + strOri[i];

    }
    console.log("Reversed String : " + revStr);

}


revString("Hallo");
