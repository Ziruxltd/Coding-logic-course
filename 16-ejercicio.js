
function contarVocales(texto) {
    let coincidencias = texto.match(/[aeiou]/gi);
    console.log("El texto tiene "+coincidencias.length+" vocales.")
    
};


contarVocales("hola me lllamo Antonio Jaramillo");