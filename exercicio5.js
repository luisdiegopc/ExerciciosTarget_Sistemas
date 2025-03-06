/* 5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/ 

function inverterString(str) {
    let invertida = ""; // String vazia para armazenar o resultado

    // String de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i]; // Add caractere ao resultado
    }

    return invertida; // Retorna a string invertida
}

const stringOriginal = "Texto de testes do exercício número 5!";
const stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
