
function censurar(text=false, busq=false){
    if (text && busq) {
        
        var textoLimpio = text.replace(new RegExp(busq,"gi"),"[CENSURADO]");

        console.log(textoLimpio)

    } else if (text && !busq){
        console.log("No puedes hacer la búsqueda")
    } else {
        console.log("no puedes leer el texto y la búsqueda")
    }
}


var parrafo = "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza clásica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín"
var cens= "la"
censurar(parrafo,cens)