
function recorrerNumero (numero) {

    console.log("los divisores de "+numero+ " son:")    

    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            console.log(i)
        }
    }
}

recorrerNumero(15)