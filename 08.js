/*

Crear un algoritmo que tome un array de objetos y devuelva un array de pares. (array de array)
*/

console.log("🎉");

let arrayObj = [
    {
        id: 1,
        name: 'Viper',
    },
    {
        id:2,
        name: 'Osa',
    },
    {
        id:3,
        name: 'Viper',

    }
];

let pair = [
    [1,{ id:1, name: 'Blaca'}],
    [2,{ id:2, name: 'Osa'}],
    [3,{ id:3, name: 'Viper'}],

]

function toPairs(arrayObj){
    let pairs = [];
    for(let idx in pair){
        let element = arrayObj[idx];
        pairs[idx] = [element.id, element];
    }
    return pairs;
}

let result = toPairs(arrayObj);
console.log(result);
console.log("Probando entorno de desarrollo.");
