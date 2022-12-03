document.addEventListener("DOMContentLoaded", function(){

    function tantoPorCiento(porCiento, numero){
        var resultado = (numero/100)*porCiento;
        console.log("El "+ porCiento+ " por ciento de " + numero + " es: " + resultado)
    }

    tantoPorCiento(10,55)



})