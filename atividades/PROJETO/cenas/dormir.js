const exibirTexto = require('../sistemas/sistemas')
const cena2 = require('./cena2')

const prompt = require('prompt-sync')()

var escolha

async function dormir (player, fugiu, lobo, loboVive, pausa){
    if (fugiu == true) {
        console.clear()
        await exibirTexto(`Você está em um ambiente nebuloso, cercado por uma névoa espessa. A iluminação é suave e a atmosfera é etérea, como se estivesse em um sonho. À medida que o você avança, uma figura familiar começa a emergir da névoa: é a mulher misteriosa de antes. Ela está parada em um local central, com uma expressão calma e enigmática.\n`, 10)
        await exibirTexto(`"Será que o senhorzinho poderia me dizer o por que você fugiu de mim?" ela diz, assim que você se aproxima.\n O que você responde?\n 1 - Eu fiquei com medo, por isso fugi. 2 - Minha mãe me ensinou que eu não devo falar com estranhos.\n`, 10)

        await (escolha = prompt())
        console.clear()
        switch (parseInt(escolha)) {
            case 1:
                if (loboVive == false) {
                    await exibirTexto(`"Engraçado você dizer isso, eu não te vi ficar com medo quando você teve que lutar contra aquele lobo, na verdade`,10)
                    await exibirTexto("...", 600)
                    await exibirTexto(` VOCÊ FOI ATÉ UM POUCO CRUEL COM ELE!"\n`, 20)
                    pausa()
                    dialogoSeFugiu()
                    
                    
                }else{
                    await exibirTexto("O medo é uma caracteristica muito presente em você, eu vi a forma que você correu desesperado daquele lobo, eu nunca vi alguém correr tão rápido daquele jeito.\n", 10)
                    pausa()
                    dialogoSeFugiu()

                }
                break;
            
            case 2:
                await exibirTexto("A minha mãe também me dizia a mesma coisa. Já que é assim, vamos fazer um favor a elas e seguir esse conselho.\n", 10)
                pausa()
                await cena2(player, lobo, loboVive, pausa)
                break
            

            default:
                break;
        }
    } else {
        await exibirTexto(`Você está em um ambiente nebuloso, cercado por uma névoa espessa. A iluminação é suave e a atmosfera é etérea, como se estivesse em um sonho. À medida que o você avança, uma figura familiar começa a emergir da névoa: é a mulher misteriosa de antes. Ela está parada em um local central, com uma expressão calma e enigmática.\n`, 10)

        await exibirTexto(`Há quanto tempo, ${player.nome}! Vejo que você não está mais sozinho, seu novo bichinho de estimação é muito bonitinho.`)

    }
    async function dialogoSeFugiu(){

        console.clear()

        await exibirTexto(`"Bem, mas isso não importa, eu tenho algo importante para te dizer. Por conta do seu comportamento de antes, você acabou não escolhendo um nome para si. \n"`, 10)
        console.clear()
        await exibirTexto(`"Então eu acabei tendo que improvisar, mas não se preocupe, eu sou muito boa em escolher nomes, Sr. ${player.nome}."\n`, 10)
        
        await exibirTexto(`"Eu não pude te mostrar isso antes, mas estes são os seus status atuais, eu não sei muito bem o que isso significa, mas aqui está:\n`, 10)
        await player.status()
        pausa()
        await exibirTexto(`Por enquanto isso é tudo que eu tenho a dizer, nos vemos mais tarde, Sr ${player.nome}\n`, 10)
        pausa()
        cena2(player, lobo, loboVive, pausa)
        

    }
   
}
module.exports = dormir