function exibirTexto(text, delay) {
    return new Promise((resolve) => {
        let index = 0;

        function proximaLetra() {
            if (index < text.length) {
                process.stdout.write(text[index]);
                index++;
                setTimeout(proximaLetra, delay);
            } else {
                
                resolve();
            }
        }

        proximaLetra();
    });
}

module.exports = exibirTexto