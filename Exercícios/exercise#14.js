// Exercícios - Curso Fundamentos de Programação [Cod3r]
// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os exemplos abaixo para um melhor entendimento:
// Exemplos:
// objetoParaArray({ 
// nome: "Maria", 
//  profissao: "Desenvolvedora de software" 
// }) -> irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]] 
// objetoParaArray({ 
// codigo: 11111, 
//  preco: 12000 
// }) -> irá retornar [["codigo", 11111], ["preco", 12000]]

const browsers = {
    firstNav: 'Google Chrome',
    secondNav: 'Mozilla Firefox',
    thirdNav: 'Microsoft Edge',
    fourthNav: 'Opera'
}
function conversor(objeto){
  return Object.entries(objeto);
}
console.log(conversor(browsers))

// O método Object.entries() retorna uma array dos próprios pares [key, value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos através do loop for...in (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - prototype chain).

// function objetoParaArray(objeto) {
//   const resultado = []
//   for (let chave in objeto)
//   resultado.push([ chave , objeto[chave] ])
//   return resultado
// }

// function objetoParaArray(objeto) {
//   const chaves = Object.keys(objeto)
//   const resultado = chaves.map( chave => [chave, objeto[chave]] )
//   return resultado
// }