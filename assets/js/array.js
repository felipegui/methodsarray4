//let list = ['10', '20', '30', '40', '50'];
//let list2 = [];
let list = [
    { id: 1, nome: 'Fulano', surname: 'Da Silva' },
    { id: 2, nome: 'Beltrano', surname: 'Lopes' },
    { id: 3, nome: 'Cicrano', surname: 'Fonseca' }
];
/*
    Método find(), usado para encontrar algum item
    dentro do array que está sendo implementado.
    Usando o if ternário.
*/
/*
list2 = list.find(function(item) {
    return (item == 20) ? true : false;
});
*/

/*
    Usando o método findIndex() para encontra o índice correspondente
    ao item que está sendo procurando, dentro do array que está sendo
    implementado.
*/
/*
list2 = list.findIndex(function(item) {
    return (item == 50) ? true : false;
});
let res = list2;
*/
let person = list.find(function(item) {
    return (item.nome == 'Fulano') ? true : false;
});

let res = person;

console.log(res);

document.getElementById("array").innerHTML = res;