function angulo(grados) {
    let resultado = "Angulo Completo";
    if (grados < 90){
        resultado = "Angulo agudo"
    } else if (grados === 90){
        resultado = "Angulo recto"
    } else if (grados > 90 && grados <180) {
        resultado = "Angulo obtuso"
    } else if (grados === 180) {
        resultado = "Angulo recto"
    } else if (grados > 180 && grados < 360) {
        resultado ="Ángulo cóncavo"
    } 
    return resultado
}

console.log(angulo(30))