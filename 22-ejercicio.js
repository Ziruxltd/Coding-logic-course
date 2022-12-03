function mayorMenor (num1,num2){
    if (num1<num2) {
        console.log("El numero mayor es: " + num2)
        console.log("El numero menor es: " + num1)
    } else if (num1 === num2) {
        console.log(num1 + " y " + num2 +"son iguales")
    } else {
        console.log("El numero mayor es: " + num1)
        console.log("El numero menor es: " + num2)
    }
        
}

mayorMenor(6,4)
