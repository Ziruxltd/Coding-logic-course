
function repetir(string,number){
    var newString = ""
    for (i=0; i<number; i++) {
        newString += string +" "
    }
    console.log(newString)
}

repetir("hola",3)