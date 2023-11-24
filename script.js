
// Dentro do arquivo js, faça:
// a) Declare uma variável para armazenar um nome, sem atribuir um valor a essa variável.

let meuNome

// b) Declare uma variável para armazenar uma idade, sem atribuir um valor a essa variável.

let idade

// c) Declare uma variável para armazenar um local, sem atribuir um valor a essa variável.

let local

// d) Pergunte ao usuário para que ele forneça essas informações.

meuNome = prompt(`Qual o seu nome?`)
idade = prompt(`Quantos anos você tem?`)
local = prompt(`Onde você mora?`)

// e) Imprima no console igual a frase modelo utilizando as informações fornecidadas pelo usuário
// Modelo: "Olá, meu nome é João, tenho 26 anos e moro atualmente no Rio grande do Norte".

console.log(`Olá, meu nome é ${meuNome}, tenho ${idade} anos e moro atualmente no ${local}`);