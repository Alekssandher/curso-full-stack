const exibirTexto = require("../sistemas/exibirTexto")

async function acordar(){
    console.clear()
    await exibirTexto("Você acorda num lugar estranho", 10)
    
}

module.exports = acordar