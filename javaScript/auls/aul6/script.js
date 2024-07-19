window.onload = function() {
    document.getElementById("cep").addEventListener("focusout", function(){
        research(this.value)
    })
}


function clearForm() {
    document.getElementById("rua").value = ""
    document.getElementById("numero").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
}

function meu_callback(content){
    if (!("erro" in content)){
        document.getElementById("rua").value = (content.logradouro)
        document.getElementById("bairro").value = (content.bairro)
        document.getElementById("cidade").value = (content.localidade)
        document.getElementById("estado").value = (content.uf)
    }else {
        clearForm()
        alert("Cep não encontrado")
    }
}

function research(valor) {
    var cep = valor.replace(/\D/g, '')

    if (cep != ""){
        var checkCep = /^[0-9]{8}$/

        if (checkCep.test(cep)){
            document.getElementById("rua").value = "..."
            document.getElementById("bairro").value = "..."
            document.getElementById("cidade").value = "..."
            document.getElementById("estado").value = "..."

            var script = document.createElement('script')
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback'

            document.body.appendChild(script)
            
        }
        else {
            clearForm()
            alert("Formato do Cep inválido.")
        }
    }
    else {
        clearForm()
    }
}