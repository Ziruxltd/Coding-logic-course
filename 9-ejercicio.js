
var count = {}
var comunes= []

function elementosComunes(arr1,arr2){
    for (i=0; i < arr1.length; i++){
        count[arr1[i]] = 1
        
    }
    for (i=0; i < arr2.length; i++){

        if(count[arr2[i]]) {
            count[arr2[i]] = count[arr2[i]] +1
        }else {
            count[arr2[i]] = 1
        }
    }
    
    for (i=0; i< Object.keys(count).length; i++) {
        if (Object.keys(count)[i]>1) {
            comunes.push(Object.keys(count)[i])
        }
    }
    console.log(comunes)
}

elementosComunes([2,3,5,5,7],[1,4,5,7])




function elementosComunes2 (arr1,arr2){

    const filtrado = arr1.filter(elemento => {
    return arr2.includes(elemento);

    })
    return filtrado
}

elementosComunes2([2,3,5,5,7],[1,4,5,7])