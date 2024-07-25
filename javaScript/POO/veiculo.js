class Veiculo{

    velocidade = 0
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

    validar(){
        if(!this.marca){
            throw new Error("Ops, você esqueceu de preencehr a marca.")
        }else if (typeof(this.marca) != "string"){
            throw new Error("O tipo da marca deve ser stirng")
        }
        if(!this.modelo){
            console.log("Ops, você esqueceu de preencehr o modelo.")
        }
    }

    padronizar(){
        this.marca = this.marca.toString().toUpperCase()
        this.modelo = this.modelo.toString().toUpperCase()
        this.tipo = this.tipo.toString().toLowerCase()
    }

    acelerar(velo){
        this.velocidade += velo
        console.log("Velocidade atual: ", this.velocidade)
    }
}


module.exports = Veiculo