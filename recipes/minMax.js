console.log("Min & Max Values");

function minMax(numArr) {
    //Store the initial min and max values from 0th index
    let min = numArr[0], max = numArr[0];

    for (let i = 0; i < numArr.length; i++) {
        //keep swapping min & max value based on which is greater or lesser than previous and store them
        if (numArr[i] > max) {
            max = numArr[i];
        } else if (numArr[i] < min) {
            min = numArr[i];
        }

        console.log("Max buffer = " + max);
        console.log("Min buffer = " + min);
        console.log("------------");
    }

    console.log("Final Max = " + max);
    console.log("Final Min = " + min);
}

let numArr = [121, 11, 2, 4, 5, 32, 34, 5462, 561];
minMax(numArr);