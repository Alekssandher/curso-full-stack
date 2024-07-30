const exibirTexto = require("../sistemas/sistemas")

const Personagens = require("./personagens")

class Lobo extends Personagens {
    constructor (nome, vida, ataque, sorte, fome,){
        super(nome, vida, ataque, sorte)
        this.fome = fome

    }
    async status(){
        await exibirTexto("--------Status---------")
        await exibirTexto(`Nome: ${this.nome}\n`,65)
        await exibirTexto(`Vida: ${this.vida}\n`,65)
        await exibirTexto(`Ataque: ${this.ataque}\n`,65)
        await exibirTexto(`Sorte: ${this.sorte}\n`,65)
        await exibirTexto(`Fome: ${this.fome}\n`,65)
    }
    atacar() {
        return Math.floor(Math.random() * (this.sorte + this.ataque))
    }
    defender(golpe){
        this.vida -= this.vida -= golpe
    }
}

module.exports = Lobo