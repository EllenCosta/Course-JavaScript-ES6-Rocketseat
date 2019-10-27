// Exercício 4.1

const usuario = {
    nome: 'Ellen Julian Costa',
    endereco: {
        cidade: 'São José dos Campos',
        estado: 'São Paulo'
    }
};

const {nome, endereco: {cidade, estado}} = usuario;
console.log(nome);
console.log(cidade);
console.log(estado);

// Exercício 4.2

function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({nome: 'Ellen', idade: 24}));
console.log(mostraInfo({nome: 'Camille', idade: 16}));