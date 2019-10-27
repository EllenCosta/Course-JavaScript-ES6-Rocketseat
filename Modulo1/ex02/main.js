const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    { nome: 'Lucas', idade: 30, empresa: 'Facebook'}
];

// Utilizando o map → Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const map = usuarios.map(function(user) {
    return user.idade;
});
console.log(map);

// Utilizando o filter → Crie uma variável que tenha apenas os usuários que trabalham 
// na Rocketseat e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const filter = usuarios.filter(function(user) {
    return user.empresa == 'Rocketseat' && user.idade >= 18;
});
console.log(filter);

// Utilizando o find → Crie uma variável que procura por um usuário que trabalhe na 
// empresa Google: undefined

const find = usuarios.find(function(user) {
    return user.empresa == 'Google';
});
console.log(find);

// Unindo operações Multiplique a idade de todos usuários por dois e depois realize um filtro 
// nos usuários que possuem no máximo 50 anos.

const op = usuarios.map(function(user) {
    return {...user, idade: user.idade * 2};
}).filter(function(user) {
    return user.idade <= 50;
});
console.log(op);