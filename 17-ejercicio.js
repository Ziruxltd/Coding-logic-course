
function buzz(numero) {

    let resultado = ""
    if(numero % 3 === 0 && numero % 5 === 0) {
        resultado = "Buzzlightyear";
    } else if (numero % 3 === 0) {
        resultado = "Buzz";
    } else if (numero % 5 === 0) {
        resultado = "Lightyear";
    } else {
        resultado = numero;
    }

    return resultado;
}

function Buzzlightyear (x) {

    for (let i=1; i<=x; i++) {
        console.log(buzz(i));
    }
    
}
Buzzlightyear(300)