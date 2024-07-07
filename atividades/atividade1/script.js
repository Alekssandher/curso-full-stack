window.onload = function(){

    // Função para limpar os formulários
    function clearForm() {
        document.getElementById("peso").value = ""
        document.getElementById("altura").value = ""
        document.getElementById("resultado").textContent = ""
        
    }
    
    // Função é chamada sempre que a página for criada / recarregada
    clearForm()

    // Função para calcular o imc e retornar seu valor
    function calcImc(){
        
        // Recebe os dados do usuário e substitui vírgulas por pontos
        var peso = parseFloat(document.getElementById("peso").value.replace(",", "."))
        var altura = parseFloat(document.getElementById("altura").value.replace(",", "."))

        // Teste se os valores estão sendo pegos corretamente
        console.log("Peso:",peso, "Altura:",altura)
    
        // Faz o calculo do imc e o insere dentro duma váriavel
        var imCalc = peso / (altura * altura)

        // Formata o valor do imc para exibir apenas duas casas decimais após a virgula e o insere dentro doutra váriavel
        var imc = imCalc.toFixed(2)

        // Teste se a váriavel imCalc está sendo formatada corretamente
        console.log("Seu imc:",imc)

        // Verifica o valor do imc e retorna uma mensagem de acordo com sua classificação
        if (imc < 18.5) {
            return `Seu Imc é ${imc}, você está abaixo do peso`
        } else if (imc < 24.9 && imc >= 18.5){
            return `Seu Imc é ${imc}, você está com o peso normal`
        } else if (imc >= 25 && imc < 29.9){
            return `Seu Imc é ${imc}, você está com sobrepeso`
        } else if (imc >= 30){
            return `Seu Imc é ${imc}, você está com obesidade`
        }
        

    }
    
    // Chama a função calcImc ao clicar no botão calcular
    document.getElementById("calcular").addEventListener("click", function(){
        document.getElementById("resultado").textContent = calcImc()
    })

    // Chama a função clearForm ao clicar no botão limpar
    document.getElementById("limpar").addEventListener("click", function(){
        clearForm()
    })
}