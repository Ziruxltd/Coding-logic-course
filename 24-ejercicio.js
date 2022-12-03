function comprobarPermuta (numeros, numero) {
    let numerosJuntados = numeros.join("");
    let numeroPermutado = ""
    for (let i = 1; i <= numero; i++ ){
        numeroPermutado += "" + i
    }
    if (numerosJuntados === numeroPermutado) {
        console.log(true)
    } else {
        console.log(false)
    }

}

comprobarPermuta([1,2,4,5,],5)