
function cleanText(text1, text2){

    let textClean1   = text1.toLowerCase().replace(/[!¡/\s/ .,;:-]/gi, "").split("").sort().join("")
    let textClean2   = text2.toLowerCase().replace(/[!¡/\s/ .,;:-]/gi, "").split("").sort().join("")

    if (textClean1 === textClean2){
        console.log(true)
    } else{
        console.log(false)
    }
    
}

cleanText("sergio","rsgo")