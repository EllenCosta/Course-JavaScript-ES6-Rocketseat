### :pencil2: Exercício :three:

#### Converta as funções nos seguintes trechos de código em Arrow Functions:

Exercício 3.1
```javascript
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
    return item + 10;
});
```
---
Exercício 3.2   
*Dica: Utilize uma `constante` para function*
```javascript
const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
    return usuario.idade;
}

mostraIdade(usuario);
```
---
Exercício 3.3   
*Dica: Utilize uma `constante` para function*
```javascript
const nome = 'Diego';
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
```
---
Exercício 3.4
```javascript
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    });
}
```