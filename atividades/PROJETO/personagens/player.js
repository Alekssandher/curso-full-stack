const Personagens = require("./personagens")

class Player extends Personagens {
    constructor (nome, vida, ataque, sorte, fome){
        super(nome, vida, ataque, sorte)
        this.fome = fome
    }
}

module.exports = Player