const Personagens = require("./personagens")

class Lobo extends Personagens {
    constructor (nome, vida, ataque, sorte, fome,){
        super(nome, vida, ataque, sorte)
        this.fome = fome

    }
    atacar() {
        return Math.floor(Math.random() * (this.sorte + this.ataque))
    }
    defender(golpe){
        this.vida -= this.vida -= golpe
    }
}

module.exports = Lobo