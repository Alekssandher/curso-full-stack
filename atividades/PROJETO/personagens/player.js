const exibirTexto = require("../sistemas/sistemas")
const Personagens = require("./personagens")

class Player extends Personagens {
    constructor (nome, vida, ataque, sorte, fome, itens){
        super(nome, vida, ataque, sorte)
        this.fome = fome
        this.itens = itens
    }

    async status(){
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
        this.vida -= golpe
    }
    restaurar(cura){
        this.vida += cura 
    }
}

module.exports = Player