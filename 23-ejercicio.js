function palabrasMayuscula (text) {
    let splitedText = text.split(" ")
    let textoEnMayusculas = ""
    for (word of splitedText) {
        const str = 'flexiple';
        const wordMayuscula = word.charAt(0).toUpperCase() + word.slice(1);
        textoEnMayusculas += wordMayuscula + " ";
    }
    console.log(textoEnMayusculas)
}


palabrasMayuscula("hola me llamo antonio jaramillo")