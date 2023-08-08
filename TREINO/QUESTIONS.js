// 1) Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.

// 2) Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

// 3) Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

// 4) Loops: Crie um loop que imprima todos os números de 1 a 100.

// 5) Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.

// 6) Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.

// 7) Objetos: Crie um objeto que represente um livro, com propriedades para título, autor e número de páginas. Imprima cada propriedade no console.

// 8) Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.

// 9) Manipulação de Strings: Escreva uma função que receba uma string e retorne a mesma string, mas com a primeira letra de cada palavra em maiúsculas.

// 10) Promises e Fetch API: Use a Fetch API para fazer uma chamada para uma API pública (como a API do JSONPlaceholder) e exibir os resultados no console.


// GABARITO

// 1)

let nome = "João";
let idade = 25;
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);

// 2)

let num1 = prompt("Digite um número:");
let num2 = prompt("Digite outro número:");
num1 = Number(num1);
num2 = Number(num2);
console.log(`A soma é: ${num1 + num2}`);
console.log(`A subtração é: ${num1 - num2}`);
console.log(`A multiplicação é: ${num1 * num2}`);
console.log(`A divisão é: ${num1 / num2}`);

// 3)

let userAge = prompt("Quantos anos você tem?");
userAge = Number(userAge);
if (userAge >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 4)

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 5)

function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(5, 3));  // Saída: 8

// 6)

let frutas = ["maçã", "banana", "manga", "uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// 7)

let livro = {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    numeroDePaginas: 144
};
console.log(livro.titulo);      // Saída: A Revolução dos Bichos
console.log(livro.autor);       // Saída: George Orwell
console.log(livro.numeroDePaginas);  // Saída: 144

// 8)

<button id="myButton">Clique em mim!</button>
<script>
document.getElementById("myButton").addEventListener("click", function() {
    alert("Você clicou no botão!");
});
</script>

// 9)

function capitalize(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize("hello world"));  // Saída: "Hello World"

// 10)

fetch('<https://jsonplaceholder.typicode.com/posts')>
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Erro:', error));