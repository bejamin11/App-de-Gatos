//Arreglos
var lista = [[1,2],[3,4],[5,6],[7,8]]
console.log(lista[0][0])
lista[3][1]=9
console.log(lista)
//Agregar elementos al final
lista.push(["Juan",20]);
console.log(lista);

//Quitar elemento del final
lista.pop(); //si hacemos a = lista.pop(), a guardará el elemento quitado
console.log(lista);

//Quita primer elemento
lista.shift();
console.log(lista);

//Agregar al principio
lista.unshift([1,2]);
console.log(lista)

//Funciones
function suma(a, b){
    resultado = a+b;
    return resultado;
}

console.log(suma(1,2))