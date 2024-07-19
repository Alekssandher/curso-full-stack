const prompt = require("prompt-sync")()

const name = prompt("Qual o seu nome? ")
var age = prompt("Qual a sua idade? ")

console.log(`Bom dia, ${name}. Você tem ${age} anos`)