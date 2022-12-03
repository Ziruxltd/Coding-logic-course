
var lineas = []
function lado(num) {
    var line = ""
    for (var i=num-1; i>=0; i--) {
        line += "*"
    }
    console.log(line)
}

function relleno(num) {
    var espacios = num - 2;
    
    var line = "";
    for (var i=num; i>=1; i--) {
        if (i==num) {
            line += "*"
        } else if (i==1){
            line += "*"
        } else {
            line += " "
        }
    }
    console.log(line)

}

function dibujo(num){
    var dibujo = lado(num) + "\n";

    for (var i=2; i<num; i++){
        dibujo += relleno(num)
    }

    dibujo += lado(num);
}

dibujo(4)