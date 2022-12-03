function fibonnacci(num) {
    let serie= [0,1]
    for (let i = 1; i<num; i++){
        serie.push(serie[serie.length-1]+serie[serie.length-2])
    }
    console.log("serie completa: " + serie.join(", "))
    console.log("resultado de la fibonnacci: "+serie[serie.length-1])
}

fibonnacci(10)