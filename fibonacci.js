function verificaFibonacci(num) {
    let a = 0;
    let b = 1;

    // Verifica se o número é 0 ou 1, pois ambos pertencem à sequência de Fibonacci
    if (num === a || num === b) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    // Calcula a sequência de Fibonacci até o número informado
    while (b <= num) {
        const proximo = a + b; // Calcula o próximo número na sequência
        a = b; // Atualiza o valor de a
        b = proximo; // Atualiza o valor de b

        // Verifica se o número pertence à sequência
        if (b === num) {
            return `${num} pertence à sequência de Fibonacci.`;
        }
    }

    return `${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
const numero = 13; // Altere este valor para testar
const resultado = verificaFibonacci(numero);
console.log(resultado);
