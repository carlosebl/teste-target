function verificaLetraA(str) {
    // Inicializa um contador para todas as letras 'a' e suas variações
    let quantidadeTotal = 0;

    // Converte a string para minúsculas para facilitar a verificação
    const texto = str.toLowerCase();

    // Percorre cada caractere da string
    for (let char of texto) {
        // Conta as ocorrências da letra 'a' e suas variações
        if (char === 'a' || char === 'à' || char === 'á' || char === 'â' || char === 'ã') {
            quantidadeTotal++;
        }
    }

    // Monta a mensagem de resultado
    if (quantidadeTotal > 0) {
        return `A letra 'a' ocorre ${quantidadeTotal} vez(es) na string.`;
    } else {
        return "A letra 'a' não foi encontrada na string.";
    }
}

// Exemplo de uso
const frase = "A casa do avô é agradável à mesa. Também adoro maçã!"; // Altere este valor para testar
const resultado = verificaLetraA(frase);
console.log(resultado);
