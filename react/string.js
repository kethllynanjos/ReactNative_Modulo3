const escola = "Cod3r"

console.log(escola.charAt(4)) // me retorna a letra da quarta posição
console.log(escola.charAt(5)) // me retorna vazio. JS retorna percentual um percentual de erros menor

// para colocar string pode usar "" '' ou ``

console.log(escola.charCodeAt(3)) // retorna valor da tabela UNICODE
console.log(escola.indexOf('o')) // indice associado a variavel escola

console.log(escola.substring(1)) // inclui indice 1 ate o final
console.log(escola.substring(0,3)) // indice 0 a 2
console.log('Escola' .concat(escola).concat("!")) //Escola é um valor do tipo literal, ou seja posso passar direto sem variavel
// poderia usar console.log('Escola' + escola + "!")
// + no contexto numérico vai somar mas no string vai concatenar
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // regex para substituir todos os digitos

console.log('Ana,Maria,Pedro'.split(',')) // conversão para array. Pode ser usaddo