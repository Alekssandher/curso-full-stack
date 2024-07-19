class Carro {
    constructor(marca, modelo, ano, tipo, combustivel) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.tipo = tipo
        this.combustivel = combustivel
    }

    show(){
        console.log(`${this.marca} Modelo: ${this.modelo}, ano ${this.ano} \nTipo: ${this.tipo}, Combustivel: ${this.combustivel}`)
    }
}

module.exports = Carro