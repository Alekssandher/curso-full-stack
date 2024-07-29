const Personagens = require("./personagens")

class Player extends Personagens {
    constructor (nome, vida, ataque, sorte, fome, itens){
        super(nome, vida, ataque, sorte)
        this.fome = fome
        this.itens = itens
    }

    atacar() {
        return Math.floor(Math.random() * (this.sorte + this.ataque))
    }
    defender(golpe){
        this.vida -= golpe
    }
}

module.exports = Player