function numerosImpares(num1,num2){
    impares = 0;
    
    if (num1<num2) {
        for (i=(num1+1); i<num2; i++) {
            var rest = i%2
            if ( rest==1) {
                impares += 1
            }
        }
        console.log("Entre "+num1+" y "+ num2+ " hay " + impares + " números impares" )
    }else {
        for (i=(num2+1); i<num1; i++) {
            var rest = i%2
            if ( rest==1) {
                impares += 1
            }
        }
        console.log("Entre "+num2+" y "+ num1+ " hay " + impares + " números impares" )
    }

}

numerosImpares(89,33)