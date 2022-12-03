document.addEventListener("DOMContentLoaded", function() {

    function tablaMultiplicaciones(numero) {
        
        var encabezado = "Tabla de multiplicar del " +numero
        console.log(encabezado)
        
        for(i=1; i<11; i++) {
            resultado = i * numero
            console.log(i+" x " + numero + " = " + resultado )
        }
    }
    
    var input = document.getElementById("multiplicar");
    input.addEventListener("click", function() {
        var value = document.getElementById("num").value
        tablaMultiplicaciones(value);
    })
    
    //tablaMultiplicaciones(7);
})