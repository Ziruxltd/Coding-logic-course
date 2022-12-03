function invertir (num) {
    var numString= num.toString();
    var newString = ""
    for (i=numString.length-1; i>=0; i-- ){
        newString += numString[i]
    }
    console.log(numString + " Invertido es: " +newString)
}


invertir(-79485)