function elevar(array){
    let map1 = array.filter(num => {return typeof num === "number"})
    return map1.map(num => num*num)
}

console.log(elevar([1,2,3,"hola",5,3,4,5,4]))