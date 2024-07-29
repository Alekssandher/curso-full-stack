const Personagens = require("./personagens")

class Player extends Personagens {
    constructor (nome, vida, ataque, sorte, fome, itens){
        super(nome, vida, ataque, sorte)
        this.fome = fome
        this.itens = itens
    }
}

module.exports = Player