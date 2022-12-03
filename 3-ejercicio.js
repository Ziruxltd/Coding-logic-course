document.addEventListener("DOMContentLoaded", function(){

var comparar = "lo"    
function coincidencias(frase, busqueda) {
    var textoLimpio = frase.toLowerCase().replace(/[!¡.,;:-]/gi, "");
    var count = 0;
    var palabras = textoLimpio.split(" ");
    console.log(textoLimpio);

    for ( var palabra of palabras) {
        if (palabra == comparar) {
            count = count +1
        } else { 
            continue }
    }
    console.log(count)
}
coincidencias("Mucho contento me dio, señora mía, la carta que vuesa grandeza me escribió, que en verdad que la tenía bien deseada. La sarta de corales es muy buena, y el vestido de caza de mi marido no le va en zaga. De que vuestra señoría haya hecho gobernador a Sancho mi consorte ha recebido mucho gusto todo este lugar, puesto que no hay quien lo crea, principalmente el cura y mase Nicolás el barbero y Sansón Carrasco el bachiller; pero a mí no se me da nada, que como ello sea así, como lo es, diga cada uno lo que quisiere: aunque, si va a decir verdad, a no venir los corales y el vestido tampoco yo lo creyera, porque en este pueblo todos tienen a mi marido por un porro, y que, sacado de gobernar un hato de cabras, no pueden imaginar para qué gobierno pueda ser bueno. Dios lo haga y lo encamine como vee que lo han menester sus hijos.", comparar);

});