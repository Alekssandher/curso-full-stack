const prompt = require('prompt-sync')();

/**
 * Função para pausar a execução e esperar que o usuário pressione Enter.
 */
function pause() {
    prompt('Pressione Enter tecla para continuar...');
}


//Função para solicitar um valor numérico válido.

function solicitarNumero(message) {
    let valor;
    while (true) {
        valor = parseFloat(prompt(message));
        if (!isNaN(valor)) {
            return valor;
        }
        console.clear();
        console.log("Entrada inválida. Por favor, digite um número.");
    }
}


//Função para solicitar um valor inteiro válido.

function solicitarInteiro(message) {
    let valor;
    while (true) {
        valor = parseInt(prompt(message));
        if (!isNaN(valor) && valor >= 0) {
            return valor;
        }
        console.clear();
        console.log("Entrada inválida. Por favor, digite um número inteiro não negativo.");
    }
}


//Função para cadastrar um aluno.

function cadastrarAluno() {
    console.clear();
    console.log("******************************************************");
    console.log("*                                                    *");
    console.log("*   Bem-vindo(a) ao Programa de Cadastro de Alunos   *");
    console.log("*                                                    *");
    console.log("******************************************************");
    pause();
    console.clear();

    let aluno = {};

    // Solicita o nome do aluno
    aluno.nome = prompt('Digite o nome do aluno: ');

    // Cadastra as matérias
    aluno.materias = [];
    let continuar = true;

    while (continuar || aluno.materias.length < 3) {
        console.clear();
        console.log("******************************************************");
        console.log(`* Cadastro de Matéria (${aluno.materias.length + 1}) *`);
        console.log("******************************************************");

        let materia = {};

        // Solicita o nome da matéria
        materia.nome = prompt('Digite o nome da matéria: ');

        // Realiza o cadastro de notas
        materia.notas = [];
        for (let i = 0; i < 3; i++) {
            let nota = solicitarNumero(`Digite a nota ${i + 1} da matéria ${materia.nome}: `);
            materia.notas.push(nota);
        }

        // Cálculo da média
        materia.media = materia.notas.reduce((a, b) => a + b, 0) / materia.notas.length;

        // Cadastro de faltas
        materia.faltas = solicitarInteiro(`Digite o número de faltas da matéria ${materia.nome}: `);

        // Verificação de reprovação por faltas
        materia.reprovadoPorFaltas = materia.faltas > 5;

        // Adiciona a matéria ao array de matérias do aluno
        aluno.materias.push(materia);

        // Perguntar se deseja continuar cadastrando matérias
        if (aluno.materias.length >= 3) {
            continuar = prompt('Deseja cadastrar outra matéria? (s/n) ').toLowerCase() === 's';
        }

        // Pausar antes de continuar
        pause();
    }

    console.log(aluno);

    return aluno;
}


//Função para exibir os resultados do aluno.

function exibirResultados(aluno) {
    console.clear();
    console.log("******************************************************");
    console.log("*                 Resultados do Aluno                *");
    console.log("******************************************************");
    console.log(`\nAluno: ${aluno.nome}\n`);

    aluno.materias.forEach(materia => {
        console.log(`Matéria: ${materia.nome}`);
        console.log(`Média: ${materia.media.toFixed(2)}`);
        console.log(`Faltas: ${materia.faltas}`);

        let status = 'Aprovado';

        if (materia.reprovadoPorFaltas) {
            status = 'Reprovado por faltas';
        } else if (materia.media < 6) {
            status = 'Reprovado por notas';
        }

        console.log(`Status: ${status}\n`);
    });

    // Pausar antes de finalizar
    pause();
}

// Execução do programa
let aluno = cadastrarAluno();
exibirResultados(aluno);
