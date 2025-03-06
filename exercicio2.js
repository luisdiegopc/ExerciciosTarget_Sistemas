/*2)  Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */ 

function analiseFibonacci(numero) {
    if (numero < 0) return "O número informado não pertence a sequência de Fibonacci.";

    let a = 0; // Primeiro número 
    let b = 1; // Segundo número 

    while (a <= numero) {
        if (a === numero) {
            return `O número ${numero} pertence a sequência de Fibonacci.`;
        }
        // Continua na sequência
        let temp = a + b;
        a = b;
        b = temp;
    }

    return `O número ${numero} não pertence a sequência de Fibonacci.`;
}

// Conferindo a função
const numero = 21; // Informe o número   
console.log(analiseFibonacci(numero));