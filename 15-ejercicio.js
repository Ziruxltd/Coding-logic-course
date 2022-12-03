
function caracterMasUsado(text) {

    var characters   = text.toLowerCase().replace(/[!¡/\s/ .,;:-]/gi, "").split("")
    var mapeo_letras        = {};
    let biggestSoFar = 0
    let letraMas =""

    for (let letra of characters) {
        if(!mapeo_letras[letra]){
            mapeo_letras[letra] = 1
        } else {
            mapeo_letras[letra]++
        }
    }
    for (let letra in mapeo_letras) {
        if( mapeo_letras[letra] > biggestSoFar) {
            biggestSoFar = mapeo_letras[letra]
            letraMas = letra
        } else {
            continue
        }
    }
console.log(mapeo_letras)
console.log(biggestSoFar)
console.log(letraMas)
console.log("El caracter que más se repite es "+"["+letraMas+"]"+" "+biggestSoFar+" veces.")
}




caracterMasUsado("hola me llamo antonio jaramillo");