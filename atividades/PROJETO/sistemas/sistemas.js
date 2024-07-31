// Função que exibe o texto no terminal sendo uma letra de cada vez e com um tempo determinado em milisegundos
function exibirTexto(text, delay) {
    return new Promise((resolve) => {
        let index = 0;

        function proximaLetra() {
            if (index < text.length) {
                process.stdout.write(text[index]);  // Imprime a letra atual no terminal
                index++;  // Avança para a próxima letra
                setTimeout(proximaLetra, delay);  // Chama a função `proximaLetra` após o atraso
            } else {
                resolve();  // Resolve a Promise quando todo o texto for exibido
            }
        }

        proximaLetra();  // Inicia o processo de exibição do texto
    });
}

module.exports = exibirTexto;
