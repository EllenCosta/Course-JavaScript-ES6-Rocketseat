### :pencil2: Exercício :four:

4.1 Desestruturação simples   
A partir do seguinte objeto:
```javascript
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC'
    }
};
```
Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
fim deve ser possível fazer o seguinte:
```javascript
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
```
---
4.2 Desestruturação em parâmetros   
Na seguinte função:
```javascript
function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 });
```
Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
separadamente e a função poder retornar apenas:
```javascript
return `${nome} tem ${idade} anos.`;
```
