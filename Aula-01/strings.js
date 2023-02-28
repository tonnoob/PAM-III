const fruta = "banana"

console.log(fruta.charAt(1)) // retorna segunda letra


// para colocar string pode usar "" '' ou ´´

console.log(fruta.charCodeAt(2)) // retorna valor da tabela UNICODE
console.log(fruta.indexOf('a')) // índice associado à variável fruta

console.log(fruta.substring(3)) // inclui Índice 3 até o final
console.log(fruta.substring(0,4)) // indice 0 a 3
console.log('Fruta: ' .concat(fruta).concat("!")) //Concatena os valores
//poderia usar  console.log('Escola" + escola + "!")


console.log('Maça, Kiwi, Pera'.split(',')) //Converte para array
