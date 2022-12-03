function devolver(texto) {
    let mayusCount = 0
    let minusCount = 0

    for (char of texto){
        if (char === char.toUpperCase()){
            mayusCount++
        } else {
            minusCount++
        }
    }

    if (mayusCount>minusCount){
        console.log(texto.toUpperCase());
    } else if (mayusCount===minusCount){
        console.log("¡El numero de mayúsculas y minúsculas son iguales!");
        console.log(texto.charAt(0).toUpperCase() + texto.toLowerCase().slice(1));
    } else {
        console.log(texto.toLowerCase());
    }
}

devolver("anToNIo")