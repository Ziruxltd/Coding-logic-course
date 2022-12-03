
var arrayInicial = [3,5,3,4,6,2,3,4,2];
var miniArray = []
var finalArray = [];

function dividirArray(arrayInicial) {
    for (i=0; i<arrayInicial.length; i=i+2) {
        if (i+1<arrayInicial.length){

            miniArray = []
            miniArray.push(arrayInicial[i],arrayInicial[i+1])
            finalArray.push(miniArray)
        } else{
            miniArray = []
            miniArray.push(arrayInicial[i])
            finalArray.push(miniArray)
        }
    }
    console.log(finalArray)
}

dividirArray(arrayInicial)

