let num = [1, 4, 2, 7, 8, 5  ]
num.sort()

for (let pos = 0; pos < num.length; pos++) {

    console.log(num[pos])

}

/*

vaga a = [item0, item1, item2]

a = array / vetor / variável composta

vetor é composto de elementos

item0, item1, item2 = conteúdo valor

------------------------------------------------------------

let num [5, 4, 3]

5 = 0
4 = 1
3 = 2

0, 1, 2 = indice chave (posição)

------------------------------------------------------------

let num = [5 , 4 , 3]

num[3] = 6   = cria mais um elemento
num.push(7)  = para adicionar sem precisar apontar a posição
num.length   = comprimento do vetor 
num.sort()   = pega os valores e coloca em ordem crescente


for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

for (let pos in num) { // para cada posição em num eu vou mostar o console.log(num[pos])
    console.log(num[pos])
}

num.indexOf(7)
num.indexOf(3) = -1
*/