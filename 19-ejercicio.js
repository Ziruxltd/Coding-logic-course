
const coleccionDePelículas = [
    {
    titulo: "El señor de los anillos",
    director: "peter Jackson",
    vista: true
    },
    {
    titulo: "2",
    director: "2dir",
    vista: false
    },
    {
    titulo: "3",
    director: "3dir",
    vista: true
    },
    {
    titulo: "4",
    director: "4dir",
    vista: false
    },
]

function misPeliculas(peliculas){
    for(p of peliculas){
        let mostrar = `"${p.titulo} de ${p.director}`

        if (p.vista){
            console.log("Ya has visto: " + mostrar)
        } else {
            console.log ("Te falta por ver: " + mostrar)
        }
    }
}

misPeliculas(coleccionDePelículas)