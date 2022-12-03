function capicua(num){
    let reverse = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
    if (reverse == num) {
        console.log(true)
    }  else {
        console.log(false)
    }    
}
capicua(2002)


