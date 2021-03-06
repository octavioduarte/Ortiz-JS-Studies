const arrayNumbers = [1, 2, 3, 4, 5]

/**
 *  Monte um for que percorra arrayNumbers e imprima com o console.log
 * o dobro de cada um dos valores.
 * 
 * Dica: Multiplicação em JS se usa o asterisco, exemplo: 10 * 3 = 30
 *  
 * */


// Digite sua resposta na linha abaixo

// Solução
for (let i = 0; i < arrayNumbers.length; i++) {
    console.log(arrayNumbers[i] * 2)
}




/**
 * Monte um "for" que imprima no terminal os números de 0 até 100 de forma decrescente
 */


// Digite sua resposta na linha abaixo


// Solução
for (let i = 100; i >= 0; i--) {
    console.log(i)
}


/**
 * Monte um "for" que imprima no terminal os números de 0 até 100, com 
 * exceção dos números divisiveis por 3
 * 
 * Dica: Use o operador "%" (Resto da divisão) 
 */


// Digite sua resposta na linha abaixo

// Solução
for (let i = 0; i <= 100; i++) {
    if (i % 3 !== 0) {
        console.log(i)
    }
}