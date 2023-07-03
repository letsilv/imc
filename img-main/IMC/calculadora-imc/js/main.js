// Capturando os dados do formulário
const dados = document.querySelector('#forms');

// Criando um monitor do evento submit e função anônima
dados.addEventListener('submit', function (event) {
    // Previne o evento padrão do submit
    event.preventDefault();

    // Captura os dados dos inputs
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;

    // Validade dos valores que atendem à condição
    if (peso !== '' && altura !== '') {
        // Chamada da função que calcula o IMC
        const imc = calcularIMC(peso, altura);

        // Chamada da função que traz a mensagem da classificação do IMC
        const mensagem = obterMensagemIMC(imc);

        // Monta a mensagem para ser enviada
        const resultado = criarResultado(mensagem);

        // Chama a função do resultado (mensagem) e seta como True
        exibirResultado(resultado, true);
    } else {
        // Chama a função do resultado (mensagem) e seta como False
        exibirResultado('Por favor, preencha todos os campos.', false);
    }
});

// Função que gera a classificação do IMC
function obterMensagemIMC(imc) {
    let mensagem = '';

    if (imc < 18.5) {
        mensagem = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        mensagem = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        mensagem = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        mensagem = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        mensagem = 'Obesidade grau 2';
    } else {
        mensagem = 'Obesidade grau 3';
    }

    return mensagem;
}

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    return imc.toFixed(2);
}

// Função que cria o resultado
function criarResultado(mensagem) {
    const resultadoElement = document.querySelector('#resultado');
    const p = document.createElement('p');
    p.textContent = mensagem;
    return p;
}

// Função para exibir o resultado
function exibirResultado(resultado, sucesso) {
    const resultadoElement = document.querySelector('#resultado');
    resultadoElement.innerHTML = '';

    if (sucesso) {
        resultado.classList.add('fraseOk');
    } else {
        resultado.classList.add('fraseNo');
    }

    resultadoElement.appendChild(resultado);
}

// Captura o evento 'reset' e limpa o resultado
dados.addEventListener('reset', function () {
    const resultadoElement = document.querySelector('#resultado');
    resultadoElement.innerHTML = '';
});
