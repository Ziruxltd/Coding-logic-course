document.addEventListener("DOMContentLoaded", function(){
    
    var button = document.getElementById("bot2");
    var word = document.getElementById("2ejer").value;
    var newString = "";

    function reverseString(str) {
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        console.log(newString);

        if (word == newString) { 
            console.log("True");
        } else { 
            console.log("False");
        }
    }
    






});