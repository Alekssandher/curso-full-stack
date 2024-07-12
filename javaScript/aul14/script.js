const prompt = require("prompt-sync")()

var notas = []

function calcMedia(){

    const numNotas = +prompt("Quantas notas você quer digitar? ")

    for (let index = 0; index < numNotas; index++) {
    
        notas.push(+prompt(`${index + 1} - Digite a nota: `))
        
    }
    
    let media = 0
    
    notas.forEach((value) => {
        media += value
    })
    
    media = media / notas.length

    return media
}

const media1 = calcMedia()

if (media1 >= 6){
    console.log(`Aluno aprovado com média ${media1} \n`)
    console.log("PARABÉNS!!!!")
}