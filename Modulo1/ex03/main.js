// Exercício 3.1

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

// Exercício 3.2

const usuario = { nome: 'Ellen', idade: 24 };
const mostraIdade = usuario => usuario.idade;
console.log(`A idade é ${mostraIdade(usuario)}`);

// Exercício 3.3

const nome = 'Ellen';
const idade = 24;
const mostraUsuario = (nome = 'Ellen', idade = 18) => ({nome, idade});
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// Exercício 3.4

const promise = () => new Promise((resolve, reject) => resolve());