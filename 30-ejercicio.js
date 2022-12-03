function eliminarDuplicados(elementos){
    elementos = elementos.filter(elemento => {
        return typeof elemento === "number"
    })  
    let sinDuplicados = new Set(elementos);   
        console.log(sinDuplicados)
}
eliminarDuplicados([1,2,2,5,6,4,"hola",3])


function eliminarjaviernes(elementos){
    elementos = elementos.filter(elemento => {
        return typeof elemento === "number"
    })  
    
    let ya_vistos = []
    for(let e=elementos.length-1; e>=0; e--){
        tumadre = elementos[e]
        if (ya_vistos.includes(tumadre)){
            elementos.splice(e, 1)
        } else {ya_vistos.push(tumadre)}
    }
    console.log(ya_vistos,elementos)
}
eliminarjaviernes([1,2,2,5,6,4,"hola",3])