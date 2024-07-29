const prompt = require('prompt-sync')()

const exibirTexto = require("../sistemas/exibirTexto")

var escolha

async function acordar(fugiu, player){
    console.clear()
    

    if (fugiu) {
       
        await exibirTexto("Você sente seu coração batendo forte enquanto tenta entender onde está. As lembranças de sua fuga ainda são frescas na sua mente, você se lembra de cada detalhe, aquela conversa havia sido real demais para ser apenas um pesadelo. O lugar onde acordou é uma clareira cercada por árvores altas e densas. A luz da lua penetra suavemente pelas copas das árvores, criando padrões de sombra no chão. \n", 10);
        



    } else {
        await exibirTexto("Você acorda perto de uma clareira, o lugar ao seu redor parece ser um campo aberto cercado por árvores altas e densas, A luz da lua penetra suavemente pelas copas das árvores, criando padrões de sombra no chão. Você se lembra da mulher misteriosa e suas palavras ainda ecoam na sua mente.", 10);
    }
    
    async function escolher(){
        
        await exibirTexto("Você se levanta e se depara com um caminho de pedras a sua frente. \n O que você faz?\n1 - Seguir o caminho de pedras. 2 - Investigar os arredores\n", 10)
        await (escolha = prompt())

        switch (parseInt(escolha)) {
            case 1:
                
                break;
            
            case 2:
                break
            default:
                break;
        }

    }

}

module.exports = acordar