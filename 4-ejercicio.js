document.addEventListener("DOMContentLoaded", function(){

    var newString = ""

    function invertir (palabra) {
        for (var i = palabra.length - 1; i >= 0; i--) {
            newString += palabra[i];
        }
        console.log(newString)
    }

    invertir("hola antonio")

    var nose = "saludos"
    console.log(nose[3])

})