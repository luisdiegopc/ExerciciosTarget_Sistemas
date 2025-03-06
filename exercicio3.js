/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. */ 

// JSON faturamento
const faturamentoMensal = [
    { "dia": 1, "faturamento": 200.0 },
    { "dia": 2, "faturamento": 300.5 },
    { "dia": 3, "faturamento": 0.0 },
    { "dia": 4, "faturamento": 400.0 },
    { "dia": 5, "faturamento": 100.0 },
    { "dia": 6, "faturamento": 0.0 },
    { "dia": 7, "faturamento": 150.0 }
];

function analisarFaturamento(dados) {
    //  Dias com faturamento maior que 0
    const diasComFaturamento = dados.filter(dia => dia.faturamento > 0);
    
    // Menor e maior faturamento
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.faturamento));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.faturamento));
    
    // Calc   média de faturamento
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.faturamento, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
    
    // Dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.faturamento > mediaFaturamento).length;
    
    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Aanálise. 
const resultado = analisarFaturamento(faturamentoMensal);

console.log("Menor faturamento:", resultado.menorFaturamento);
console.log("Maior faturamento:", resultado.maiorFaturamento);
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
