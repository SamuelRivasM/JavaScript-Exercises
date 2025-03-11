// Escribe una función que reciba una palabra y devuelva su longitud.

let word = 'Samuel Rivas'

// let devolverLongitud = (wordInput) => console.log("Cantidad de palabras: "+wordInput.lenght)
function devolverL (wordInput){
    let cantidad = wordInput.replace(/\s/g, "").length;
    return cantidad
}

let res = devolverL(word);

console.log(res);