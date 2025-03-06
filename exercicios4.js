/*  4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 
*/

// Faturamento mensal p/ estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Func calcular os %  de faturamento
function calcularPercentuais(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0); // Soma do faturamento
    const percentuais = {};

    // Calc   percentual por estado
    for (const estado in faturamento) {
        percentuais[estado] = ((faturamento[estado] / total) * 100).toFixed(2); // Arredondado para 2 casas decimais
    }

    return { total, percentuais };
}

// Exec  cálculo
const resultado = calcularPercentuais(faturamentoPorEstado);

 
console.log("Faturamento Total Mensal: R$", resultado.total.toFixed(2));
console.log("Percentual por Estado:");
for (const estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}
