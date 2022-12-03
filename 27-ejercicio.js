function calcular(dias){
    let años= (dias/365)
    let meses= (dias%365)/30
    let days= (dias%365)%30

    console.log(~~años)
    console.log(~~meses)
    console.log(days)


}

calcular(920)