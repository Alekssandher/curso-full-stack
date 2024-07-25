const Carro = require('./carro')
const Moto = require('./moto')

const carro = new Carro("vw", "Fusca", 1993, "ComPacto", "Gasolina", 2)

const moto = new Moto("BMW", "GS1200", 2002, "Rally", "Gasolina", 1200)


carro.validar()

carro.padronizar()
// console.log(carro.show())

console.log(carro)

console.log(carro.acelerar(10))