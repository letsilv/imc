
// Capturando os dados do formulário
const form = document.querySelector('#forms');

// Adicionando um ouvinte de evento para o envio do formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

// Desestruturação dos campos de entrada
    const { value: peso } = form.querySelector('#peso');
    const { value: altura } = form.querySelector('#altura');

// Validando os valores de entrada
    if (!peso) {
        exibeMensagem('Peso inválido', false);
        return;

}
    if (!altura) {
        exibeMensagem('Altura inválida', false);
        return;

}

    // Calculando o IMC e obtendo a classe do IMC
    const imc = getImc(peso, altura);
    const classeImc = getClasseImc(imc);

    // Montando a mensagem
    const mensagem = `Seu IMC é ${imc} (${classeImc})`;

    // Exibindo o resultado
    exibeMensagem(mensagem, true);

});

// Função que gera a classificação do IMC
function getClasseImc(imc) {
    const classeImc = ['Abaixo do norma', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];
    if (imc >= 39.9) return classeImc[5];
    if (imc >= 34.9) return classeImc[4];
    if (imc >= 29.9) return classeImc[3];
    if (imc >= 24.9) return classeImc[2];
    if (imc >= 18.9) return classeImc[1];
    return classeImc[0];

}

// Função para calcular o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

// Função para criar parágrafos
function criarP() {
    const p = document.createElement('p');
    return p;
}

// Prepara a mensagem para o formulário
function exibeMensagem(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarP();

// Adicionando classes com base na validação
    p.classList.add(isValid ? 'ok' : 'no');
    p.textContent = msg;
    resultado.appendChild(p);    

}

// Captura o evento 'reset' e limpa o resultado
form.addEventListener('reset', () => {   
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
});