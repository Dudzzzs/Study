//Functions
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//.indexOf(elemntos) = Retorna a posição no array que o elemento está inserido
let index = array.indexOf(3)

//.push(elemento) = Adiciona na última posição do array o elemento
array.push(10)

//.includes(elemnto) = Verifica se o elemento está presente no array e retorna um valor bolheano
let includes = array.includes(3)

//.splice(posição, quantidade) = Retira do array o elemnto na posição escolhida e a quantidade de arrays posteriores na quantidade escolhida
array.splice(0, 1)

//.forEach(variavel => {codigo}) = Executa um código para cada elemento do array, variável representa cada elemento
array.forEach(numero =>{
    numero++
})

//.filter(variavel => condiçao) = Filtra os elemntos do array com base na condiçao estabelecida
array.filter(maiorQ2 => maiorQ2 > 2)

//.sort() = Ordena o array em ordem crescente
array.sort()
